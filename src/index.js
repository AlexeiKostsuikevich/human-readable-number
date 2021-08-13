module.exports = function toReadable (number) {
    let num ;
    const fromOneToTwenty = ['','one','two','three','four','five','six','seven','eight','nine','ten',
        'eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const dozens = ['', '', 'twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    const hundreds = ['','one hundred','two hundred','three hundred','four hundred','five hundred','six hundred','seven hundred','eight hundred','nine hundred']
    if (number < 20 ){
        if (number === 0)  {
            return 'zero';}
        return fromOneToTwenty[number];
    }
    if (number<100 && number>=20) {
        num = dozens[Math.floor(number / 10)] +' '+ fromOneToTwenty[number%10]
        return num.trim();
    }
    if (number > 99 && number < 120){
        num = hundreds[Math.floor(number / 100)] +' '+ fromOneToTwenty[number % 100];
        return num.trim();
    }
    if (number > 119 && number < 1000) {
        if (number % 100 < 20) {
            num = hundreds[Math.floor(number / 100)] +' '+ fromOneToTwenty[number % 100]
        } else {
        num = hundreds[Math.floor(number / 100)] +' '+ dozens[Math.floor((number % 100) / 10)] +' '+ fromOneToTwenty[number % 10];}
        return num.trim();
    }
}
