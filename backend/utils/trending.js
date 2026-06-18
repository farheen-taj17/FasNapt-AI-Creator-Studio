function calculateTrendingScore(
views,
likes,
comments
){

return (
views * 0.4 +
likes * 0.4 +
comments * 0.2
);

}

module.exports =
calculateTrendingScore;

