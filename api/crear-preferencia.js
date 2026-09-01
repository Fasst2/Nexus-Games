import { MercadoPagoConfig, Preference } from 'mercadopago';

const client = new MercadoPagoConfig({ 
    accessToken: process.env.MP_ACCESS_TOKEN 
});

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Método no permitido' });
    }

    try {
        const { items, userEmail } = req.body;

        const mpItems = items.map(item => ({
            title: `${item.name} (${item.platform})`,
            unit_price: Number(item.price),
            quantity: 1,
            currency_id: 'ARS'
        }));

        const preference = new Preference(client);

        const response = await preference.create({
            body: {
                items: mpItems,
                payer: {
                    email: userEmail
                },
                back_urls: {
                    success: 'https://tu-tienda.vercel.app/?status=success',
                    failure: 'https://tu-tienda.vercel.app/?status=failure',
                    pending: 'https://tu-tienda.vercel.app/?status=pending'
                },
                auto_return: 'approved'
            }
        });

        return res.status(200).json({ init_point: response.init_point });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error al generar la preferencia de pago.' });
    }
}