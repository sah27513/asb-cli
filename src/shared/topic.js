export const createTopic = (sb, topic) => {
  return new Promise((resolve, reject) => {
    sb.createTopicIfNotExists(topic, error => {
      if (error) reject(err);
      else resolve(topic);
    });
  });
};
