// START OF CODE

// Define variables
var co2_radius = 15;

// Create canvas 800 x 600 pixels
function setup() {
  createCanvas(800,600);
}

// co2 positions
co2_positions = [[200,250], [230,220], [300,180], [350,170], [400,165], [500,165],
                 [600,165], [295, 305], [340, 360], [390,370], [440,390], [520,420],
                 [590,420], [370,270]];

// Main loop: draw background
function draw() {
  // Set background colour to light red
  background(205, 92, 92);

  // Draw RBCs
  fill(174,12,0);
  ellipse(400, 330, 250, 200);
  ellipse(650, 210, 75, 55);
  ellipse(750, 250, 75, 55);
  ellipse(700, 90, 75, 55);
  ellipse(40,100,75,55);
  ellipse(135, 155, 75, 55)

  // Draw CO2 molecules
  fill(100);
  ellipse(200,250,co2_radius,co2_radius);
  ellipse(230,220,co2_radius,co2_radius);
  ellipse(300, 180, co2_radius, co2_radius);
  ellipse(350, 170, co2_radius, co2_radius);
  ellipse(400, 165, co2_radius, co2_radius);
  ellipse(500, 165, co2_radius, co2_radius);
  ellipse(600, 165, co2_radius, co2_radius);
  ellipse(295, 305, co2_radius, co2_radius);
  ellipse(340, 360, co2_radius, co2_radius);
  ellipse(390, 370, co2_radius, co2_radius);
  ellipse(440, 390, co2_radius, co2_radius);
  ellipse(520, 420, co2_radius, co2_radius);
  ellipse(590, 420, co2_radius, co2_radius);
  ellipse(370,270,co2_radius,co2_radius);

  // Draw h2o reaction with co2
  fill(55);
  ellipse(330,375,5,5);
  ellipse(336,376,5,5);

  ellipse(396,379,5,5);
  ellipse(450,386,5,5);

  ellipse(529,425,5,5);
  ellipse(599,425,5,5);

  fill(255);
  ellipse(390, 382, 8,8);
  ellipse(445, 380, 8, 8);
  ellipse(524,431,8,8);
  ellipse(594,431,8,8);

  // Draw h2o 
  fill(255);
  ellipse(332, 381, 8, 8);
  fill(55);
  ellipse(370,390,5,5);
  ellipse(390,400,5,5);

  // Draw Hgb
  fill(255);
  rect(360, 290, 20, 20);
  rect(400, 300, 20, 20);
  rect(440, 280, 20, 20);
  fill(174,12,0);
  arc(370,290,co2_radius,co2_radius,0,PI);

  // Draw co2 attached to hgb
  fill(100);
  ellipse(410, 300, co2_radius, co2_radius);
  ellipse(450, 280, co2_radius, co2_radius);

  // Pathway arrows
  // Path 1 (stays in blood)
  line(320,130,390,130);
  fill(0);
  triangle(386,126,386,134,390,130);
  fill(132, 207, 240);
  ellipse(355,110,20,20);
  fill(0);
  textSize(14);
  text('1', 351, 114);
  textSize(14);
  text('To the lungs', 368, 115);

  // Entering rbc
  line(208,250,280,300);
  fill(0);
  triangle(280, 300, 270, 300, 277, 290);

  // Path 2 (Hgb)
  fill(132, 207, 240);
  ellipse(340,270,20,20);
  fill(0);
  textSize(14);
  text('2', 336, 274);

  // Path 3(HCO3-)
  fill(132, 207, 240);
  ellipse(420, 370, 15, 15);
  fill(0);
  textSize(10);
  text('3', 417, 373);

  // Path 4 (diffuse out of cells)
  fill(132, 207, 240);
  ellipse(550, 400, 15, 15);
  fill(0);
  textSize(10);
  text('4', 547, 403);

  // RBC path
  line(560,330,600,330);
  fill(0);
  triangle(600,335,600,325,607,330);
  textSize(14);
  text('To the lungs', 615, 335);

  // HCO3- path
  line(600,450,640,450);
  fill(0);
  triangle(640,445,640,455,647,450);
  textSize(14);
  text('To the lungs', 655, 455);

  // Labels
  // Full legend
  fill(242, 187, 102);
  rect(0,400,255,200);
  fill(0);
  textSize(20);
  text('Legend:', 5, 425);

  fill(132, 207, 240);
  ellipse(30,455,20,20);
  fill(0);
  textSize(14);
  text('1', 26, 460);
  text('CO2 remains dissolved in blood',45,460);

  fill(132, 207, 240);
  ellipse(30,485,20,20);
  fill(0);
  textSize(14);
  text('2', 26, 490);
  text('CO2 reacts with hemoglobin',45,490);

  fill(132, 207, 240);
  ellipse(30,515,20,20);
  fill(0);
  textSize(14);
  text('3', 26, 520);
  text('CO2 reacts with H2O',45,520);

  fill(132, 207, 240);
  ellipse(30,545,20,20);
  fill(0);
  textSize(14);
  text('4', 26, 550);
  text('Dissolved HCO3 re-enters blood',45,550);

  //Molecules
  fill(100);
  ellipse(25,580,co2_radius,co2_radius);
  fill(0);
  text('CO2', 40, 580);

  fill(55);
  ellipse(83,580,5,5);
  fill(0);
  text('H', 90, 580);

  fill(255);
  ellipse(120, 580, 8, 8);
  fill(0);
  text('O', 127, 580);


  // CO2 molecule entering
  fill(0);
  textSize(20);
  text('CO2', 130, 265);
  line(170,260,192,250);

  // Blood
  fill(174,12,0);
  textSize(25);
  text('Blood', 20, 40);

  // RBC
  fill(0);
  textSize(20);
  text('Red Blood Cell', 505, 265);

  //Hgb
  fill(0);
  textSize(20);
  text('Hgb', 430,325);

  //HCO3-
  fill(0);
  textSize(20);
  text('HCO3-',450,440);
}
