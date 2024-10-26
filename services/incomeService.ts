import {Income, AddIncomeFormData} from "@/types";

export async function addIncome(data: AddIncomeFormData): Promise<Income> {
    const response = await fetch('/api/income', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            ...data,
            incomeDate: data.incomeDate.toISOString(),
        }),
    });

    if (!response.ok) {
        throw new Error('Failed to add income');
    }

    return response.json();
}