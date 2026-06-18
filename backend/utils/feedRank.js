function feedScore(video){

  return (

    video.likes * 4 +

    video.comments * 3 +

    video.views * 0.5

  );

}

videos.sort(
(a,b)=>

feedScore(b)
-
feedScore(a)
);

