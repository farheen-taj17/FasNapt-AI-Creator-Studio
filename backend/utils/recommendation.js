function recommendTopics(interests){

  const recommendations = {

    coding:[
      "React Projects",
      "Node.js Tips",
      "AI Applications"
    ],

    creator:[
      "YouTube Shorts",
      "Instagram Reels",
      "Viral Editing"
    ]

  };

  return recommendations[
    interests
  ] || [];

}

module.exports =
recommendTopics;


