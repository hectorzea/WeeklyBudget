export const checkSpend = (spend, remaining) => {
    let classStyle;
    if ((spend / 4) > remaining) {
        classStyle = 'alert alert-danger';
    } else if ((spend / 2) > remaining) {
        classStyle = 'alert alert-warning';
    } else {
        classStyle = 'alert alert-success'
    }
    return classStyle;
};