/*----------------------------------------------
This file contains the data used to render the player's sprites
Properties:
	Object: info | information about the sprite file
		String: info.src | The location of the spritesheet
	Object: states | contains the data for each animation state
		Object: [`state name`] | The data used to render the idle state
			Number: fps | The frame rate in which to render the animation
			Boolean: cycle | Whether or not the animation will loop
			Array: frames| Contains objects with geometric data for each frame of animtati.
					Must contain at least one frame object.
					The animation will run for however many frame objects are added to the array
				Object: [index number] | A frame of animation
					Number: width | the actual 1/1 horizontal size of the portion of image file to be rendered
					Number: height | the actual 1/1 vertical size of the portion of image file to be rendered
					Number: startX | the horizontal starting point of the portion of image file to be rendered
					Nunber: startY | the vertical starting point of the portion of image file to be rendered
/*----------------------------------------------*/

var playerData ={
	info:{
		src:`images/character_spreadsheet.png`
	},
	states:{
		//The idle animation 
    	idle:
		{
			fps:10,
			cycle:true,
			frames:
			[
				{width:76, height:90, startX:2660, startY:0},
				{width:76, height:90, startX:2812, startY:0},
				{width:76, height:90, startX:2888, startY:0},
				{width:76, height:90, startX:2964, startY:0},
				{width:76, height:90, startX:3040, startY:0},
				{width:76, height:90, startX:3116, startY:0},
				{width:76, height:90, startX:3192, startY:0},
				{width:76, height:90, startX:3268, startY:0},
				{width:76, height:90, startX:3344, startY:0},
				{width:76, height:90, startX:3420, startY:0}
				

				
			]
		},
		//The walwidth:128, height:128,
		walk:
		{
			fps:4,
			cycle:true,
			frames:
			[
				{width:76, height:90, startX:3572, startY:0},
				{width:76, height:90, startX:3648, startY:0},
				{width:76, height:90, startX:3724, startY:0},
				{width:76, height:90, startX:3724, startY:0},
				{width:76, height:90, startX:3800, startY:0},
				{width:76, height:90, startX:3572, startY:0}
			]
		},
		//The jump animation 
		jump:
		{
			fps:2,
			cycle:false,
			frames:
			[
				{width:76, height:90, startX:2280, startY:0},
				{width:76, height:90, startX:2356, startY:0},
				{width:76, height:90, startX:2432, startY:0}
			]
		},
		//The crouch animation 
		crouch:
		{
			fps:11,
			cycle:false,
			frames:
			[
				{width:76, height:90, startX:836, startY:0},
				{width:76, height:90, startX:988, startY:0},
				{width:76, height:90, startX:1140, startY:0},
				{width:76, height:90, startX:1216, startY:0},
				{width:76, height:90, startX:1292, startY:0},
				{width:76, height:90, startX:1444, startY:0},
				{width:76, height:90, startX:1520, startY:0},
				{width:76, height:90, startX:1672, startY:0},
				{width:76, height:90, startX:1824, startY:0},
				{width:76, height:90, startX:1900, startY:0},
				{width:76, height:90, startX:1976, startY:0},
			]
		},
		//The attack animation 
		attack:
		{
			fps:3,
			cycle:true,
			//width:300,
			frames:
			[
				{width:76, height:90, startX:152, startY:0},
				{width:76, height:90, startX:228, startY:0},
				{width:76, height:90, startX:304, startY:0},
				{width:76, height:90, startX:380, startY:0},
				{width:76, height:90, startX:456, startY:0},
				{width:76, height:90, startX:532, startY:0}
				
			]
		}
	}
		
}