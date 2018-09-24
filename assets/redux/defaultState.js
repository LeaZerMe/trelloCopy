"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var initialState = exports.initialState = {
	articles: [{ title: "Goals",
		articles: [{ title: "Vova", text: "Must make trello" }, { title: "Kapeluh", text: "Must make trello too" }]
	}, { title: "Ideas",
		articles: [{ title: "Any", text: "Must learn math" }, { title: "Kapeluh", text: "Must make do her homework" }]
	}, { title: "Supers",
		articles: [{ title: "Dasha", text: "Very smart" }, { title: "Kapeluh", text: "Must make do her homework" }]
	}],
	accessToDelete: false,
	deletingValue: "",
	modalTrue: false,
	adding: "",
	editingArt: {},
	closed: []
};