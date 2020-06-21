# Model

Used to predict emotion based on feature text

**URL** : `/api/model/predict`

**Method** : `POST`

**Auth required** : NO

**Data constraints**

```json
{
    "feature": "[random feature text in plain text]"
}
```

**Data example**

```
{
    "feature": "I am feeling pumped"
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "emotion": "happiness",
  "emotion-classes": "{0: 'anger', 1: 'fear', 2: 'happiness', 3: 'sadness'}",
  "prediction": "[0.05598123 0.00394219 0.6793236  0.26075292]",
  "salience": "0.6793236",
  "success": true
}
```
  * emotion refers to the predicted emotion
  * emotion clases represents the indices of the emotion in the prediction array.
  * salience represent the probability of the predicted emotion.

* **Notes:**

  *  Since the emotify-model has a web dyno, and when the web dyno receives no traffic in a 30 minute period, 
  the web dyno will sleep. As such the initial call after a while without trafic will take a while (~30s).
