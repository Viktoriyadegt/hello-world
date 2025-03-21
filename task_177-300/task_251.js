//
// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.
//
// You need to consider the following ratings:
//
// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%
// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:
//
// "Rating not recognised" in Javascript, Python and Ruby...
// ...or null in Java
// ...or -1 in C#
// Because you're a nice person, you always round up the tip, regardless of the service.
//______________________________________________________________________________________________________________________


function calculateTip(amount, rating) {
    const tips = {
        'terrible': 0,
        'poor': 5,
        'good': 10,
        'great': 15,
        'excellent': 20
    }
    const ratingLC = rating.toLowerCase()
    return ratingLC in tips     //Object.keys(tips).includes(ratingLC)
        ? Math.ceil(amount * (tips[ratingLC] / 100))
        : "Rating not recognised"
}