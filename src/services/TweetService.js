import tweetData from './data.json';

export function getTweet (id, delay = 0) {

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tweetData.tweets[id]);
    }, Math.max(delay, 0));
  });
}

export function getDescription (delay = 0) {

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tweetData.description);
    }, Math.max(delay, 0));
  });
}

export function getMetaDescription (delay = 0) {

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tweetData.metaDescription);
    }, Math.max(delay, 0));
  });
}
