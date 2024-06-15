import { premium } from "@/helpers/premiumPricing";

export default function PricingCard() {
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(value);
    };

    return (
        <div className="flex flex-wrap gap-4 justify-center p-4">
            {premium.map((premiumPlan) => (
                <div key={premiumPlan.plan} className="card card-compact w-full sm:w-10/12 md:w-6/12 lg:w-4/12 bg-base-100 shadow-xl rounded-lg">
                    <div className="bg-gradient-to-r from-[#F3FF90] to-[#06D001] p-8 rounded-t-lg">
                        <h2 className="text-2xl font-extrabold mb-2">{premiumPlan.plan}</h2>
                        <ul>
                            <li className="font-medium mb-1">{formatCurrency(premiumPlan.price[0])}/Bulan</li>
                            <li className="font-medium">{formatCurrency(premiumPlan.price[1])}/Tahun <span className="font-extrabold">(save {premiumPlan.discount}%)</span></li>
                        </ul>
                    </div>
                    <div className="card-body">
                        <div>
                            <ol className="list-disc text-lg p-4">
                                {premiumPlan.fitur.map((fitur, index) => (
                                    <li key={index}>{fitur}</li>
                                ))}
                            </ol>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn bg-[#9BEC00]">Berlangganan Sekarang!</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
