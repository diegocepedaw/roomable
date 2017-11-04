const sample_matches = `{
    "userlist": [
       {
          "email":"kevin",
           "handle":"kevs",
           "description":"I am the kevmeister.",
           "attributes":{
             "dishes":false,
              "language":"english",
              "pet":false,
              "gender":"M",
              "drink":false,
              "budget":0,
              "shower":false,
              "drugs":true,
              "sleep_late":false,
              "neat":false,
              "rise_early":true,
              "smoke":true,
              "tv":true,
              "music":false,
              "friends":true,
              "email":"kevin",
              "skimpy":true
           },
           "preferences":{
             "dishes":false,
              "language":"english",
              "pet":false,
              "gender":"M",
              "drink":false,
              "budget":0,
              "shower":false,
              "drugs":true,
              "sleep_late":false,
              "neat":false,
              "rise_early":true,
              "smoke":true,
              "tv":true,
              "music":false,
              "friends":true,
              "email":"kevin",
              "skimpy":true
           },
           "match":58.82352941176471
        },
        {
          "email":"sally",
           "handle":"sal",
           "description":"SAL BOWS FOR NO MAN!",
           "attributes":{
             "dishes":true,
              "language":"english",
              "pet":true,
              "gender":"F",
              "drink":true,
              "budget":0,
              "shower":false,
              "drugs":true,
              "sleep_late":false,
              "neat":true,
              "rise_early":true,
              "smoke":true,
              "tv":true,
              "music":true,
              "friends":false,
              "email":"sally",
              "skimpy":false
           },
           "preferences":{
             "dishes":true,
              "language":"english",
              "pet":true,
              "gender":"F",
              "drink":true,
              "budget":0,
              "shower":true,
              "drugs":false,
              "sleep_late":true,
              "neat":true,
              "rise_early":false,
              "smoke":false,
              "tv":false,
              "music":true,
              "friends":false,
              "email":"sally",
              "skimpy":false
           },
           "match":70.58823529411765
        }
     ]
  }`;

export default JSON.parse(sample_matches);
