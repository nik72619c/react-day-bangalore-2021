export default function wrapPromise(mypromise) {
    let status = "pending";
    let result;
    let suspender = mypromise.then(
      r => {
        console.log('inside wrapPromise resolve');
        status = "success";
        result = r;
        return r;
      }
    );
    
    return {
      read() {
        if (status === "pending") {
          throw suspender;
        } else if (status === "error") {
          throw result;
        } else if (status === "success") {
          return result;
        }
      }
    };
  }