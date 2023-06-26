migrate((db) => {
  const collection = new Collection({
    "id": "6l9lmktwvak37ps",
    "created": "2023-06-24 00:42:43.195Z",
    "updated": "2023-06-24 00:42:43.195Z",
    "name": "art",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pde3xm5t",
        "name": "image",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": [],
          "protected": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("6l9lmktwvak37ps");

  return dao.deleteCollection(collection);
})
