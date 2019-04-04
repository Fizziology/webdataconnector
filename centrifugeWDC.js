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

    var twitter_rule_cols = [{
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

		var twitterRulesTable = {
			id: "centrifugeTwitterRules",
			alias: "Twitter rule information from Centrifuge",
			columns: twitter_rule_cols
		};

    var instagram_rule_cols = [{
			id: "property_id",
			alias: "property_id",
			dataType: tableau.dataTypeEnum.int
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
			id: "content_types",
			alias: "content_types",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "languages",
			alias: "languages",
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

		var instagramRulesTable = {
			id: "centrifugeInstagramRules",
			alias: "Instagram rule information from Centrifuge",
			columns: instagram_rule_cols
		};

		schemaCallback([propertyTable, genreTable, propertiesGenresTable, twitterRulesTable, instagramRulesTable]);

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

    //var endpointUrl = "http://localhost:3030/api/tableau/"
    var endpointUrl = "https://centrifuge.fizziology.com/api/tableau/"

    if (table.tableInfo.id == "centrifugeProperties") {
      endpointUrl = endpointUrl + "properties"
    } else if (table.tableInfo.id == "centrifugeGenres") {
      endpointUrl = endpointUrl + "genres"
    } else if (table.tableInfo.id == "centrifugePropertiesGenres") {
      endpointUrl = endpointUrl + "properties_genres"
    } else if (table.tableInfo.id == "centrifugeTwitterRules") {
      endpointUrl = endpointUrl + "twitter_rules"
    } else if (table.tableInfo.id == "centrifugeInstagramRules") {
      endpointUrl = endpointUrl + "instagram_rules"
    }
    tableau.log(endpointUrl);

		$.getJSON(endpointUrl, function(resp) {
			var tableData = [];
      var i = 0;

			// Iterate over each JSON object
      if (table.tableInfo.id == "centrifugeGenres") {
        tableau.log("genres response: ");
        tableau.log(resp);
			  var genres = resp.genres;
        for (i = 0, len = genres.length; i < len; i++) {
          tableData.push({
            "id": genres[i].id,
            "title": genres[i].title,
            "category": genres[i].category
          });
        }
      }

      if (table.tableInfo.id == "centrifugePropertiesGenres") {
        tableau.log("join response: ");
        tableau.log(resp);
			  var propertiesGenres = resp.properties_genres;
        for (i = 0, len = propertiesGenres.length; i < len; i++) {
          tableData.push({
            "id": propertiesGenres[i].id,
            "genre_id": propertiesGenres[i].genre_id,
            "property_id": propertiesGenres[i].property_id
          });
        }
      }

      if (table.tableInfo.id == "centrifugeProperties") {
        tableau.log("properties response: ");
        tableau.log(resp);
			  var properties = resp.properties;
        for (i = 0, len = properties.length; i < len; i++) {
          tableData.push({
            "id": properties[i].id,
            "title": properties[i].title,
            "vanity_title": properties[i].vanity_title,
            "tag": properties[i].tag,
            "active": properties[i].active,
            "release_date": properties[i].release_date,
            "box_office_opening": properties[i].box_office_opening,
            "distributor": properties[i].distributor,
            "rating": properties[i].rating,
            "franchise": properties[i].franchise,
            "installment": properties[i].installment,
            "cast": properties[i].cast,
            "adaptation": properties[i].adaptation,
            "cinephile": properties[i].cinephile,
            "oscar_nominee": properties[i].oscar_nominee,
            "cinema_score_letter": properties[i].cinema_score_letter,
            "cinema_score_number": properties[i].cinema_score_number,
            "tracker_title": properties[i].tracker_title,
            "created_at": properties[i].created_at,
            "updated_at": properties[i].updated_at
          });
        }
			}

      if (table.tableInfo.id == "centrifugeTwitterRules") {
        tableau.log("rules response: ");
        tableau.log(resp);
			  var rules = resp.twitter_rules;
        for (i = 0, len = rules.length; i < len; i++) {
          tableData.push({
            "id": rules[i].id,
            "property_id": rules[i].property_id,
            "gnip_id": rules[i].gnip_id,
            "term": rules[i].term,
            "active": rules[i].active,
            "created_at": rules[i].created_at
          });
        }
      }


      if (table.tableInfo.id == "centrifugeInstagramRules") {
        tableau.log("rules response: ");
        tableau.log(resp);
			  var rules = resp.instagram_rules;
        for (i = 0, len = rules.length; i < len; i++) {
          tableData.push({
            "id": rules[i].id,
            "property_id": rules[i].property_id,
            "username": rules[i].username,
            "all": rules[i].all,
            "any": rules[i].any,
            "none": rules[i].none,
            "content_types": rules[i].content_types,
            "languages": rules[i].languages,
            "active": rules[i].active,
            "created_at": rules[i].created_at
          });
        }
      }

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
