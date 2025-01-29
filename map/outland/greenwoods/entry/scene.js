var scene = {
	"title":"The Entry",
	"treasures":{
		"coins":{
			"golden":3
		}
	},
	"scenery":{
		"tree1":{
			"type":"trees"
		},
		"tree2":{
			"type":"tree"
		},
		"bushes1":{
			"type":"bushes"
		},
		"bushes2":{
			"type":"bushes"
		},
		"bushes3":{
			"type":"bushes"
		}
	},
	"path":"entry",
	"steps":{
		"s1":{
			"left":"s2",
			"freespace":true,
			"class":"sa",
			"url":{
				"world":"outland",
				"region":"greenwoods",
				"scene":"campfire",
				"step":"s6"
			}
		},
		"s2":{
			"right":"s1",
			"left":"s3",
			"freespace":true,
			"class":"sb"
		},
		"s3":{
			"right":"s2",
			"class":"sa"
		},
	}
}





