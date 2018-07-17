# Redux-Saga

## Intro

For a quick primer on redux-saga checkout the [docs](https://redux-saga.js.org/docs/introduction/)

We most often use redux-saga to asynchronously make fetch requests and to interact with the redux store.

## Redux-Saga Structure

All the sagas are forked from the root saga which is found in `sagas/index`. The sagas are forked to ensure that if one saga fails the rest remain running.

## Example

Suppose we wanted to make an API request when the SUBMIT_FORM redux action was dispatched. Our saga file would look something like this

```
function* watchSubmitForm() {
    yield takeLatest(SUBMIT_FORM, handleSubmitForm)
}

function* handleSubmitForm(action){
    try {
        const apiResponse = yield call(api.submitForm,action.formData);
        console.log(apiResponse);
    } catch(error) {
        console.error(error)
    }
}
```
