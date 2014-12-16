/**
 * @author Carl V. Lewis
 */

function BeenClicked(){
	console.log("But unlike a book, these things called 'webpages' can be interactive!");
}


// This function below loads the content

function contentLoaded(data){
	console.log("Content loaded");
	console.log(data);
	$('#pageDiv1').html(data.docName);
	// This applies the loop using the content in the JSON files
	for(var p=0; p<data.articles.length; p++){
		console.log(p);
		
		console.log(data.articles[p].byline);
		
		// Here we're defining the headline
		
		var myHedline = $('<div>').attr({'id':'headline'+p, 'class':'myHeadlineClass'})
		$(myHedline).html(data.articles[p].headline);
		
		// And now the byline
		
		var myByline = $('<div>').attr({'id':'byline'+p, 'class':'myBylineClass'})
		$(myByline).html(data.articles[p].byline);
		
		// And now the dateline
		
		var mypubDate = $('<div>').attr({'id':'byline'+p, 'class':'mypubDateClass'})
		$(mypubDate).html(data.articles[p].pubDate);
		
		// And now the excerpt
		
		var myDescription = $('<div>').attr({'id':'byline'+p, 'class':'myDescriptionClass'})
		$(myDescription).html(data.articles[p].description);
		
		// And now we're appending them all four to the loop
		
		$('#pageDiv'+p).append(myHedline);
		$('#pageDiv'+p).append(myByline);
		$('#pageDiv'+p).append(mypubDate);
		$('#pageDiv'+p).append(myDescription);
		
		
	}
}

/* 
This is merely to show 
you that I can write
multiple line comments, not 
because I need multiple
line comments here. They do come in
handy sometimes, though.
*/

function ImReady(){
	console.log("Welcome to the internets...");
	$("#pageDiv2").click(BeenClicked);
	$.get('Content.json', contentLoaded, 'json');
}

$(document).ready(ImReady);

/* 
Peace out,
Carl V. Lewis
*/

