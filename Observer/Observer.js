/************************************************************************
 * @problem : Write a program to implement Observer Design Pattern
 * @fileName : Observer.js
 * @Auther : Pradnya D. S.
 *************************************************************************/

let subscriber = {};

// we send in a container object which will handle the subscriptions and publishings
(function (container) {
  // the id represents a unique subscription id to a topic
  var id = 0;

  container.subscribe = function (topic, f) {
    if (!(topic in container)) {
      container[topic] = [];
    }

    container[topic].push({
      id: ++id,
      callback: f,
    });

    return id;
  };

  container.unsubscribe = function (topic, id) {
    let subscribers = [];
    for (var subscriber of container[topic]) {
      if (subscriber.id !== id) {
        subscribers.push(subscriber);
      }
    }
    container[topic] = subscribers;
  };

  container.publish = function (topic, data) {
    for (let subscriber of container[topic]) {
      /*
      * when executing a callback, it is usually helpful to read
      * the documentation to know which arguments will be
      * passed to our callbacks by the object firing the event
      */
      subscriber.callback(data);
    }
  };
})(subscriber);

let subscriptionID1 = subscriber.subscribe(
  "mouseClicked",
  function (data) {
    console.log(
      "Mouse clicked event and this is my event data: " +JSON.stringify(data)
    );
  }
);

let subscriptionID2 = subscriber.subscribe("mouseHovered", function (data) {
  console.log(
    "Mouse clicked event and this is my event data : " +JSON.stringify(data));
});

let subscriptionID3 = subscriber.subscribe("mouseClicked", function (data) {
  console.log(
    "Mouse clicked event and this is my event data : " +JSON.stringify(data));
});

subscriber.publish("mouseClicked", { data: "data1" });
subscriber.publish("mouseHovered", { data: "data2" });

// we unsubscribe from an event by removing the subscription ID
subscriber.unsubscribe("mouseClicked", subscriptionID3);

// there are 2 console.logs executed
subscriber.publish("mouseClicked", { data: "data1" });
subscriber.publish("mouseHovered", { data: "data2" });
