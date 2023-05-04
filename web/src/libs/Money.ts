const formatMoney = (data: number) => {
    const amount = data.toString().replace('.', ',');
    return amount.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

export {formatMoney}