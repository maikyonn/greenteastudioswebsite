migrate((db) => {
  const collection = new Collection({
    "id": "xr1qjwuteibujq4",
    "created": "2023-06-24 00:43:04.795Z",
    "updated": "2023-06-24 00:43:04.795Z",
    "name": "messages",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ppadaxhn",
        "name": "message",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("xr1qjwuteibujq4");

  return dao.deleteCollection(collection);
})
