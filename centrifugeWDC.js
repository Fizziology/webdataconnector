(function () {

	// // Init function for connector, called during every phase
	// myConnector.init = function(initCallback) {
	// 	tableau.authType = tableau.authTypeEnum.basic;
	// 	initCallback();
	// }

	var myConnector = tableau.makeConnector();

	myConnector.getSchema = function (schemaCallback) {
		tableau.log("Hello WDC!");

		var property_cols = [{
			id: "id",
			dataType: tableau.dataTypeEnum.int
		}, {
			id: "title",
			alias: "Slug Title",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "vanity_title",
			alias: "Vanity Title",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "tag",
			alias: "tag",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "active",
			alias: "active",
			dataType: tableau.dataTypeEnum.bool
		}, {
			id: "release_date",
			alias: "release_date",
			dataType: tableau.dataTypeEnum.date
		}, {
			id: "box_office_opening",
			alias: "box_office_opening",
			dataType: tableau.dataTypeEnum.float
		}, {
			id: "distributor",
			alias: "distributor",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "rating",
			alias: "rating",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "franchise",
			alias: "franchise",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "installment",
			alias: "installment",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "cast",
			alias: "cast",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "adaptation",
			alias: "adaptation",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "cinephile",
			alias: "cinephile",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "oscar_nominee",
			alias: "oscar_nominee",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "cinema_score_letter",
			alias: "cinema_score_letter",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "cinema_score_number",
			alias: "cinema_score_number",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "tracker_title",
			alias: "tracker_title",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "created_at",
			alias: "created_at",
			dataType: tableau.dataTypeEnum.datetime
		}, {
			id: "updated_at",
			alias: "updated_at",
			dataType: tableau.dataTypeEnum.datetime
		}];

		var propertyTable = {
			id: "centrifugeProperties",
			alias: "Property information from Centrifuge",
			columns: property_cols
		};

    var genre_cols = [{
			id: "title",
			alias: "title",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "category",
			alias: "category",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "id",
			dataType: tableau.dataTypeEnum.int
    }];

		var genreTable = {
			id: "centrifugeGenres",
			alias: "Genre information from Centrifuge",
			columns: genre_cols
		};

    var properties_genres_cols = [{
			id: "property_id",
			alias: "property_id",
			dataType: tableau.dataTypeEnum.int
		}, {
			id: "genre_id",
			alias: "genre_id",
			dataType: tableau.dataTypeEnum.int
		}, {
			id: "id",
			dataType: tableau.dataTypeEnum.int
    }];

		var propertiesGenresTable = {
			id: "centrifugePropertiesGenres",
			alias: "PropertiesGenres join table information from Centrifuge",
			columns: properties_genres_cols
		};

    var rule_cols = [{
			id: "property_id",
			alias: "property_id",
			dataType: tableau.dataTypeEnum.int
		}, {
			id: "gnip_id",
			alias: "gnip_id",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "term",
			alias: "term",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "username",
			alias: "username",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "all",
			alias: "all",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "none",
			alias: "none",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "any",
			alias: "any",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "one",
			alias: "one",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "content_types",
			alias: "content_types",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "object_type",
			alias: "object_type",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "languages",
			alias: "languages",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "language",
			alias: "language",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "post_type",
			alias: "post_type",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "account",
			alias: "account",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "pages",
			alias: "pages",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "excluded_pages",
			alias: "excluded_pages",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "country",
			alias: "country",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "post_link",
			alias: "post_link",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "subreddit",
			alias: "subreddit",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "user",
			alias: "user",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "keyword",
			alias: "keyword",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "domain",
			alias: "domain",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "channel_id",
			alias: "channel_id",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "playlist_id",
			alias: "playlist_id",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "video_id",
			alias: "video_id",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "keyword_query",
			alias: "keyword_query",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "description",
			alias: "description",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "kind",
			alias: "kind",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "active",
			alias: "active",
			dataType: tableau.dataTypeEnum.bool
		}, {
			id: "created_at",
			alias: "created_at",
			dataType: tableau.dataTypeEnum.datetime
		}, {
			id: "id",
			dataType: tableau.dataTypeEnum.int
    }];

		var rulesTable = {
			id: "centrifugeRules",
			alias: "Rule information from Centrifuge",
			columns: rule_cols
		};

		var named_event_groups_cols = [{
			id: "id",
			alias: "id",
			dataType: tableau.dataTypeEnum.int
		}, {
			id: "name",
			alias: "name",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "tracker_id",
			alias: "tracker_id",
			dataType: tableau.dataTypeEnum.int
		}];

		var namedEventGroupsTable = {
			id: "centrifugeNamedEventGroups",
			alias: "Named Event Groups information from Centrifuge",
			columns: named_event_groups_cols
		};

		var named_event_types_cols = [{
			id: "id",
			alias: "id",
			dataType: tableau.dataTypeEnum.int
		}, {
			id: "name",
			alias: "name",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "description",
			alias: "description",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "range",
			alias: "range",
			dataType: tableau.dataTypeEnum.bool
		}, {
			id: "named_event_group_id",
			alias: "named_event_group_id",
			dataType: tableau.dataTypeEnum.int
		}];

		var namedEventTypesTable = {
			id: "centrifugeNamedEventTypes",
			alias: "Named Event Types information from Centrifuge",
			columns: named_event_types_cols
		};

		var named_events_cols = [{
			id: "id",
			alias: "id",
			dataType: tableau.dataTypeEnum.int
		}, {
			id: "named_event_type_id",
			alias: "named_event_type_id",
			dataType: tableau.dataTypeEnum.int
		}, {
			id: "property_id",
			alias: "property_id",
			dataType: tableau.dataTypeEnum.int
		}, {
			id: "from",
			alias: "from",
			dataType: tableau.dataTypeEnum.datetime
		}, {
			id: "to",
			alias: "to",
			dataType: tableau.dataTypeEnum.datetime
		}];

		var namedEventsTable = {
			id: "centrifugeNamedEvents",
			alias: "Named Events information from Centrifuge",
			columns: named_events_cols
		};

		var trackers_cols = [{
			id: "id",
			alias: "id",
			dataType: tableau.dataTypeEnum.int
		}, {
			id: "title",
			alias: "title",
			dataType: tableau.dataTypeEnum.string
		}];

		var trackersTable = {
			id: "centrifugeTrackers",
			alias: "Trackers information from Centrifuge",
			columns: trackers_cols
		};

		schemaCallback([propertyTable, 
										genreTable, 
										propertiesGenresTable, 
										rulesTable, 
										namedEventGroupsTable, 
										namedEventTypesTable, 
										namedEventsTable, 
										trackersTable]);

	};

	myConnector.getData = function (table, doneCallback) {
		tableau.log("getData");
    tableau.log(table.tableInfo.id);

    $.ajaxSetup({
      headers : {
        'Authorization' : "Basic " + tableau.username
      }
    });

    //the WDC API calls the getData function once for each schema
    //Here we select which url to use for each schema

    // var endpointUrl = "http://localhost:3030/api/tableau/"
    var endpointUrl = "https://centrifuge.fizziology.com/api/tableau/"
		var response_key = ""

		switch(table.tableInfo.id) {
			case "centrifugeProperties":
				response_key = "properties";
				endpointUrl = endpointUrl + "properties";
				break;
			case "centrifugeGenres":
				response_key = "genres";
				endpointUrl = endpointUrl + "genres";
				break;
			case "centrifugePropertiesGenres":
				response_key = "properties_genres";
				endpointUrl = endpointUrl + "properties_genres";
				break;
			case "centrifugeRules":
				response_key = "combined_rules";
				endpointUrl = endpointUrl + "combined_rules";
				break;
			case "centrifugeNamedEventGroups":
				response_key = "named_event_groups";
				endpointUrl = endpointUrl + "named_event_groups";
				break;
			case "centrifugeNamedEventTypes":
				response_key = "named_event_types";
				endpointUrl = endpointUrl + "named_event_types";
				break;
			case "centrifugeNamedEvents":
				response_key = "named_events";
				endpointUrl = endpointUrl + "named_events";
				break;
			case "centrifugeTrackers":
				response_key = "trackers";
				endpointUrl = endpointUrl + "trackers"
				break;
			default:
				tableau.log('something went wrong while trying to set up the Centrfigue tableau endpoint URl');

		}
		
		// Tableau not able to read the action attribute for some reason. Replaced with switch statement above
		// endpointUrl = endpointUrl + table.tableInfo.action
    tableau.log(endpointUrl);

		$.getJSON(endpointUrl, function(resp) {
			var tableData = [];
      var i = 0;

			// Iterate over each JSON object
			table_alias_name = table.tableInfo.alias
			tableau.log(table_alias_name + " response:\n")
			tableau.log(JSON.stringify(resp))

			//action same name as the response object key
			// var action_resp = resp[table.tableInfo.action];
			var action_resp = resp[response_key];

			//loop through response object, then loop through columns listed from tableInfo.columns[n].alias above
			for (i=0; i < action_resp.length; i++) {
				var tableDataObj = {}

				table.tableInfo.columns.map(function(x) {
					tableDataObj[x["id"]] = action_resp[i][x["id"]];
				});

				tableData.push(tableDataObj);
			}

			//Unnecessary. We're utilizing a more dynamic table creation above form the Cent API
			// 
      // if (table.tableInfo.id == "centrifugeGenres") {
      //   tableau.log("genres response: ");
      //   tableau.log(resp);
			//   var genres = resp.genres;
      //   for (i = 0, len = genres.length; i < len; i++) {
      //     tableData.push({
      //       "id": genres[i].id,
      //       "title": genres[i].title,
      //       "category": genres[i].category
      //     });
      //   }
      // }

      // if (table.tableInfo.id == "centrifugePropertiesGenres") {
      //   tableau.log("join response: ");
      //   tableau.log(resp);
			//   var propertiesGenres = resp.properties_genres;
      //   for (i = 0, len = propertiesGenres.length; i < len; i++) {
      //     tableData.push({
      //       "id": propertiesGenres[i].id,
      //       "genre_id": propertiesGenres[i].genre_id,
      //       "property_id": propertiesGenres[i].property_id
      //     });
      //   }
      // }

      // if (table.tableInfo.id == "centrifugeProperties") {
      //   tableau.log("properties response: ");
      //   tableau.log(resp);
			//   var properties = resp.properties;
      //   for (i = 0, len = properties.length; i < len; i++) {
      //     tableData.push({
      //       "id": properties[i].id,
      //       "title": properties[i].title,
      //       "vanity_title": properties[i].vanity_title,
      //       "tag": properties[i].tag,
      //       "active": properties[i].active,
      //       "release_date": properties[i].release_date,
      //       "box_office_opening": properties[i].box_office_opening,
      //       "distributor": properties[i].distributor,
      //       "rating": properties[i].rating,
      //       "franchise": properties[i].franchise,
      //       "installment": properties[i].installment,
      //       "cast": properties[i].cast,
      //       "adaptation": properties[i].adaptation,
      //       "cinephile": properties[i].cinephile,
      //       "oscar_nominee": properties[i].oscar_nominee,
      //       "cinema_score_letter": properties[i].cinema_score_letter,
      //       "cinema_score_number": properties[i].cinema_score_number,
      //       "tracker_title": properties[i].tracker_title,
      //       "created_at": properties[i].created_at,
      //       "updated_at": properties[i].updated_at
      //     });
      //   }
			// }

      // if (table.tableInfo.id == "centrifugeRules") {
      //   tableau.log("rules response: ");
      //   tableau.log(resp);
			//   var rules = resp.rules;
      //   for (i = 0, len = rules.length; i < len; i++) {
      //     tableData.push({
      //       "id": rules[i].id,
      //       "property_id": rules[i].property_id,
      //       "gnip_id": rules[i].gnip_id,
      //       "term": rules[i].term,
      //       "username": rules[i].username,
      //       "all": rules[i].all,
      //       "any": rules[i].any,
      //       "one": rules[i].one,
      //       "none": rules[i].none,
      //       "content_types": rules[i].content_types,
      //       "object_type": rules[i].object_type,
      //       "languages": rules[i].languages,
      //       "language": rules[i].language,
      //       "country": rules[i].country,
      //       "pages": rules[i].pages,
      //       "excluded_pages": rules[i].excluded_pages,
      //       "post_type": rules[i].post_type,
      //       "account": rules[i].account,
      //       "keyword": rules[i].keyword,
      //       "post_link": rules[i].post_link,
      //       "subreddit": rules[i].subreddit,
      //       "user": rules[i].user,
      //       "domain": rules[i].domain,
      //       "channel_id": rules[i].channel_id,
      //       "playlist_id": rules[i].playlist_id,
      //       "video_id": rules[i].video_id,
      //       "keyword_query": rules[i].keyword_query,
      //       "description": rules[i].description,
      //       "kind": rules[i].kind,
      //       "active": rules[i].active,
      //       "created_at": rules[i].created_at
      //     });
      //   }
      // }
			
			// if (table.tableInfo.id == "centrifugeNamedEventGroups") {
      //   tableau.log("join response: ");
      //   tableau.log(resp);
			//   var namedEventGroups = resp.named_event_groups;
      //   for (i = 0, len = namedEventGroups.length; i < len; i++) {
      //     tableData.push({
      //       "id": namedEventGroups[i].id,
      //       "name": namedEventGroups[i].name,
      //       "tracker_id": namedEventGroups[i].tracker_id
      //     });
			// 	}
				
			// }

			// if (table.tableInfo.id == "centrifugeNamedEventTypes") {
      //   tableau.log("join response: ");
      //   tableau.log(resp);
			//   var namedEventTypes = resp.named_event_types;
      //   for (i = 0, len = namedEventTypes.length; i < len; i++) {
      //     tableData.push({
      //       "id": namedEventTypes[i].id,
      //       "name": namedEventTypes[i].name,
			// 			"description": namedEventTypes[i].description,
			// 			"range": namedEventTypes[i].range,
			// 			"named_event_group_id": namedEventTypes[i].named_event_group_id
      //     });
      //   }
			// }

			// if (table.tableInfo.id == "centrifugeNamedEvents") {
      //   tableau.log("join response: ");
      //   tableau.log(resp);
			//   var namedEvents = resp.named_events;
      //   for (i = 0, len = namedEvents.length; i < len; i++) {
      //     tableData.push({
      //       "id": namedEvents[i].id,
      //       "named_event_type_id": namedEvents[i].named_event_type_id,
			// 			"property_id": namedEvents[i].property_id,
			// 			"from": namedEvents[i].from,
			// 			"to": namedEvents[i].to
      //     });
      //   }
			// }
			
			// if (table.tableInfo.id == "centrifugeTrackers") {
      //   tableau.log("join response: ");
      //   tableau.log(resp);
			//   var trackers = resp.trackers;
      //   for (i = 0, len = 2; i < len; i++) {
      //     tableData.push({
      //       "id": trackers[i].id,
      //       "title": trackers[i].title
      //     });
      //   }
			// }
			
			table.appendRows(tableData);
			doneCallback();
		});
	};

	tableau.registerConnector(myConnector);

	$(document).ready(function () {
		$("#submitButton").click(function () {
      tableau.log("submitButton function");
			tableau.connectionName = "Fizz Centrifuge Feed";
      var email = $('#email')[0].value;
			var token = $('#token')[0].value;
      tableau.username = btoa(email + ":" + token);
			tableau.submit();
		});
	});
})();
