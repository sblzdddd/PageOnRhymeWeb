// Copyright (c) 2022-2023 by Oscar Feng (SulphurDXD / SuperOscar2)
// small improvements by sblzdddd (processing 3 -> p5.js)

const chartLength = 3100;

let tap= [];
tap.length = chartLength;
tap[24]=3;
tap[36]=2;
tap[72]=1;
tap[84]=4;

tap[96]=2;
tap[96+18]=1;
tap[96+24]=2;
tap[96+36]=4;
tap[96+48]=1;
tap[96+72]=4;
tap[96+84]=2;

tap[96*2]=2;
tap[96*2+24]=3;
tap[96*2+48]=4;
tap[96*2+60]=2;
tap[96*2+66]=3;
tap[96*2+72]=2;
tap[96*2+84]=4;

tap[96*3]=1;
tap[96*3+72]=1;
tap[96*3+84]=2;

tap[96*4]=2;
tap[96*4+24]=3;
tap[96*4+48]=2;
tap[96*4+60]=3;
tap[96*4+66]=2;
tap[96*4+72]=1;
tap[96*4+84]=4;

tap[96*5]=3;
tap[96*5+18]=1;
tap[96*5+24]=2;
tap[96*5+36]=4;
tap[96*5+48]=2;
tap[96*5+72]=4;
tap[96*5+84]=2;

tap[96*6]=1;
tap[96*6+18]=2;
tap[96*6+24]=3;
tap[96*6+36]=2;
tap[96*6+48]=1;
tap[96*6+60]=3;
tap[96*6+66]=2;
tap[96*6+72]=3;
tap[96*6+84]=4;

tap[96*7]=3;
tap[96*7+72]=2;
tap[96*7+84]=3;

tap[96*8]=14;
tap[96*8+18]=3;
tap[96*8+24]=2;
tap[96*8+36]=3;
tap[96*8+48]=14;
tap[96*8+72]=3;
tap[96*8+84]=2;

tap[96*9]=14;
tap[96*9+18]=2;
tap[96*9+24]=3;
tap[96*9+36]=2;
tap[96*9+48]=14;
tap[96*9+72]=2;
tap[96*9+84]=3;

tap[96*10]=24;
tap[96*10+18]=4;
tap[96*10+24]=3;
tap[96*10+36]=2;
tap[96*10+48]=13;
tap[96*10+72]=1;
tap[96*10+84]=4;

tap[96*11+72]=1;
tap[96*11+84]=2;

tap[96*12]=34;
tap[96*12+18]=3;
tap[96*12+24]=2;
tap[96*12+36]=3;
tap[96*12+48]=12;
tap[96*12+72]=3;
tap[96*12+84]=2;

tap[96*13]=34;
tap[96*13+18]=3;
tap[96*13+24]=4;
tap[96*13+36]=3;
tap[96*13+48]=12;
tap[96*13+72]=1;
tap[96*13+84]=4;

tap[96*14]=23;
tap[96*14+18]=1;
tap[96*14+24]=3;
tap[96*14+36]=2;
tap[96*14+48]=14;
tap[96*14+60]=3;
tap[96*14+66]=2;
tap[96*14+72]=3;
tap[96*14+84]=2;

tap[96*15]=14;
tap[96*15+16]=14;
tap[96*15+32]=14;

tap[96*16]=13;
tap[96*16+12]=2;
tap[96*16+18]=1;
tap[96*16+24]=2;
tap[96*16+36]=3;
tap[96*16+48]=1;
tap[96*16+54]=2;
tap[96*16+60]=3;
tap[96*16+66]=4;
tap[96*16+72]=2;
tap[96*16+84]=3;

tap[96*18]=24;
tap[96*18+12]=3;
tap[96*18+18]=2;
tap[96*18+24]=4;
tap[96*18+30]=1;
tap[96*18+36]=3;
tap[96*18+42]=2;
tap[96*18+54]=2;
tap[96*18+66]=1;
tap[96*18+78]=3;
tap[96*18+72]=4;
tap[96*18+84]=1;

tap[96*20]=14;
tap[96*20+12]=3;
tap[96*20+18]=2;
tap[96*20+24]=3;
tap[96*20+30]=2;
tap[96*20+36]=3;
tap[96*20+42]=2;
tap[96*20+48]=4;
tap[96*20+60]=4;
tap[96*20+72]=1;
tap[96*20+84]=1;

tap[96*21]=23;
tap[96*21+12]=14;
tap[96*21+24]=14;
tap[96*21+36]=23;

tap[96*22+12]=13;
tap[96*22+24]=24;
tap[96*22+36]=14;
tap[96*22+48]=2;
tap[96*22+60]=2;
tap[96*22+72]=3;
tap[96*22+84]=3;

tap[96*24]=1;
tap[96*24+6]=2;
tap[96*24+18]=2;
tap[96*24+24]=1;
tap[96*24+36]=1;
tap[96*24+42]=2;
tap[96*24+48]=34;
tap[96*24+60]=34;
tap[96*24+72]=34;

tap[96*25]=1;
tap[96*25+12]=1;
tap[96*25+18]=2;
tap[96*25+24]=1;
tap[96*25+36]=1;
tap[96*25+42]=2;
tap[96*25+48]=34;
tap[96*25+60]=3;
tap[96*25+66]=4;
tap[96*25+72]=3;

tap[96*26]=1;
tap[96*26+6]=2;
tap[96*26+18]=2;
tap[96*26+30]=1;
tap[96*26+36]=2;
tap[96*26+42]=1;
tap[96*26+48]=4;
tap[96*26+54]=3;
tap[96*26+60]=4;
tap[96*26+66]=3;
tap[96*26+72]=4;

tap[96*27]=1;
tap[96*27+6]=1;
tap[96*27+12]=2;
tap[96*27+18]=2;
tap[96*27+24]=1;
tap[96*27+30]=2;
tap[96*27+36]=1;
tap[96*27+42]=2;
tap[96*27+48]=4;
tap[96*27+54]=3;
tap[96*27+60]=3;
tap[96*27+66]=4;
tap[96*27+72]=3;

tap[96*28+12]=2;
tap[96*28+18]=3;
tap[96*28+30]=1;
tap[96*28+36]=4;
tap[96*28+60]=1;
tap[96*28+66]=4;
tap[96*28+76]=2;
tap[96*28+84]=3;

tap[96*29+12]=1;
tap[96*29+18]=2;
tap[96*29+30]=4;
tap[96*29+36]=3;

tap[96*30]=4;
tap[96*30+12]=1;
tap[96*30+18]=2;
tap[96*30+24]=3;
tap[96*30+36]=2;
tap[96*30+48]=4;
tap[96*30+60]=2;
tap[96*30+72]=4;
tap[96*30+84]=3;

tap[96*31]=24;
tap[96*31+24]=34;
tap[96*31+48]=1;


let hold= [];

hold.length = chartLength;
hold[0]=1;
hold[48]=4;

hold[96*11]=14;

hold[96*17]=1;
hold[96*17+12]=2;
hold[96*17+24]=3;
hold[96*17+36]=4;

hold[96*19]=4;
hold[96*19+12]=3;
hold[96*19+24]=2;
hold[96*19+36]=1;

hold[96*23]=1;
hold[96*23+24]=2;
hold[96*23+36]=3;

hold[96*28]=14;
hold[96*28+48]=14;

hold[96*29]=14;
hold[96*29+48]=14;
hold[96*29+60]=23;
hold[96*29+72]=14;

hold[96*31]=1;
hold[96*31+36]=2;
hold[96*31+48]=4;


let holdlength= [];
holdlength.length = chartLength;
holdlength[0]=24;
holdlength[48]=24;

holdlength[96*11]=36;

holdlength[96*17]=8;
holdlength[96*17+12]=8;
holdlength[96*17+24]=8;
holdlength[96*17+36]=8;

holdlength[96*19]=8;
holdlength[96*19+12]=8;
holdlength[96*19+24]=8;
holdlength[96*19+36]=8;

holdlength[96*23]=72;
holdlength[96*23+24]=48;
holdlength[96*23+36]=36;

holdlength[96*28]=6;
holdlength[96*28+48]=6;

holdlength[96*29]=6;
holdlength[96*29+48]=6;
holdlength[96*29+60]=6;
holdlength[96*29+72]=6;

holdlength[96*31]=24;
holdlength[96*31+36]=36;
holdlength[96*31+48]=24;

let drag= [];
drag.length = chartLength;
drag[96*11+12]=14;
drag[96*11+24]=14;

drag[96*15+48]=4;
drag[96*15+54]=3;
drag[96*15+60]=4;
drag[96*15+72]=2;
drag[96*15+78]=1;

drag[96*27+75]=3;
drag[96*27+78]=3;
drag[96*27+81]=3;
drag[96*27+84]=3;

let tapinvisible= [];
tapinvisible.length = chartLength;

let holdinvisible= [];
holdinvisible.length = chartLength;
let draginvisible= [];
draginvisible.length = chartLength;

let tapdistance;
let holddistance;
let dragdistance;
let speed=15;
let linetype=2;
let comment=2;

let time=0;

let fXshift=100;
let gXshift=200;
let hXshift=300;
let jXshift=400;

let fYshift=100;
let gYshift=100;
let hYshift=100;
let jYshift=100;

function preload() {
    song = loadSound('data/music.mp3');

}
function setup() {
    isLoaded = true;
    createCanvas(600, 800);

    frameRate(58.5);
    textSize(40);
    fill(0);
    textAlign(CENTER);
    text('PagaOnRhyme', 300, 320);
    textSize(26);
    text('CLICK TO PLAY', 300, 360);
    textSize(14);
    text('difficulty: simple', 300, 420);
    
    text('Author: SuperOscar2 in 2022.12', 300, 500);
    text('Porting: sblzdddd', 300, 520);
}
let isPlaying = false;
let isLoaded = false;
function sleep(millisecondsDuration)
{
  return new Promise((resolve) => {
    setTimeout(resolve, millisecondsDuration);
  })
}
function mousePressed() {
    if (!song.isPlaying() && !isPlaying && isLoaded) {
        isPlaying = true;
        sleep(300).then(function() {
            song.play();
        })
    }
  }
function draw() {
  if(!isPlaying) return;
  background(250,255,245);
  for(let j=0;j<=chartLength - 1;j++){
    if(hold[j]!=0){
      if(hold[j]==1||hold[j]==12||hold[j]==13||hold[j]==14||hold[j]==123||hold[j]==124||hold[j]==134||hold[j]==1234){
        if(holdinvisible[j]!=1&&holdinvisible[j]!=12&&holdinvisible[j]!=13&&holdinvisible[j]!=14&&holdinvisible[j]!=123&&holdinvisible[j]!=124&&holdinvisible[j]!=134&&holdinvisible[j]!=1234){
          holddistance=time*speed-j*speed;
          fill(0,200,120);
          strokeWeight(2);
          stroke(60,150,60);
          if(holddistance<holdlength[j]*speed+800){
            if(holddistance>800&&holddistance<holdlength[j]*speed+800){
              rect(fXshift,holddistance-holdlength[j]*speed-fYshift,100,holdlength[j]*speed+800-holddistance);
              fill(10,100,10);
              rect(fXshift,holddistance-holdlength[j]*speed-fYshift-10,100,10);
            }else{
              if(holddistance>0){
                rect(fXshift,holddistance-holdlength[j]*speed-fYshift,100,holdlength[j]*speed);
                fill(10,100,10);
                rect(fXshift,holddistance-holdlength[j]*speed-fYshift-10,100,10);
                if(hold[j]>10||drag[j]!=0||tap[j]!=0){
                  strokeWeight(4);
                  stroke(200,150,0);
                }else{
                  strokeWeight(2);
                  stroke(60,150,60);
                }
                rect(fXshift,holddistance-fYshift,100,10);
              }
            }
          }
        }
      }
      if(hold[j]==2||hold[j]==12||hold[j]==23||hold[j]==24||hold[j]==123||hold[j]==124||hold[j]==234||hold[j]==1234){
        if(holdinvisible[j]!=2&&holdinvisible[j]!=12&&holdinvisible[j]!=23&&holdinvisible[j]!=24&&holdinvisible[j]!=123&&holdinvisible[j]!=124&&holdinvisible[j]!=234&&holdinvisible[j]!=1234){
          holddistance=time*speed-j*speed;
          fill(0,200,120);
          strokeWeight(2);
          stroke(60,150,60);        
          if(holddistance<holdlength[j]*speed+800){
            if(holddistance>800&&holddistance<holdlength[j]*speed+800){
              rect(gXshift,holddistance-holdlength[j]*speed-gYshift,100,holdlength[j]*speed+800-holddistance);
              fill(10,100,10);
              rect(gXshift,holddistance-holdlength[j]*speed-gYshift-10,100,10);
            }else{
              if(holddistance>0){
                rect(gXshift,holddistance-holdlength[j]*speed-gYshift,100,holdlength[j]*speed);
                fill(10,100,10);
                rect(gXshift,holddistance-holdlength[j]*speed-gYshift-10,100,10);
                if(hold[j]>10||drag[j]!=0||tap[j]!=0){
                  strokeWeight(4);
                  stroke(200,150,0);
                }else{
                  strokeWeight(2);
                  stroke(60,150,60);
                }
                rect(gXshift,holddistance-gYshift,100,10);
              }
            }
          }
        }
      }
      if(hold[j]==3||hold[j]==13||hold[j]==23||hold[j]==34||hold[j]==123||hold[j]==134||hold[j]==234||hold[j]==1234){
        if(holdinvisible[j]!=3&&holdinvisible[j]!=13&&holdinvisible[j]!=23&&holdinvisible[j]!=34&&holdinvisible[j]!=123&&holdinvisible[j]!=134&&holdinvisible[j]!=234&&holdinvisible[j]!=1234){
          holddistance=time*speed-j*speed;
          fill(0,200,120);
          strokeWeight(2);
          stroke(60,150,60);               
          if(holddistance<holdlength[j]*speed+800){
            if(holddistance>800&&holddistance<holdlength[j]*speed+800){
              rect(hXshift,holddistance-holdlength[j]*speed-hYshift,100,holdlength[j]*speed+800-holddistance);
              fill(10,100,10);
              rect(hXshift,holddistance-holdlength[j]*speed-hYshift-10,100,10);
            }else{
              if(holddistance>0){
                rect(hXshift,holddistance-holdlength[j]*speed-hYshift,100,holdlength[j]*speed);
                fill(10,100,10);
                rect(hXshift,holddistance-holdlength[j]*speed-hYshift-10,100,10);
                if(hold[j]>10||drag[j]!=0||tap[j]!=0){
                  strokeWeight(4);
                  stroke(200,150,0);
                }else{
                  strokeWeight(2);
                  stroke(60,150,60);
                }
                rect(hXshift,holddistance-hYshift,100,10);
              }
            }
          }
        }
      }
      if(hold[j]==4||hold[j]==14||hold[j]==24||hold[j]==34||hold[j]==124||hold[j]==134||hold[j]==234||hold[j]==1234){
        if(holdinvisible[j]!=4&&holdinvisible[j]!=14&&holdinvisible[j]!=24&&holdinvisible[j]!=34&&holdinvisible[j]!=124&&holdinvisible[j]!=134&&holdinvisible[j]!=234&&holdinvisible[j]!=1234){
          holddistance=time*speed-j*speed;
          fill(0,200,120);
          strokeWeight(2);
          stroke(60,150,60);      
          if(holddistance<holdlength[j]*speed+800){
            if(holddistance>800&&holddistance<holdlength[j]*speed+800){
              rect(jXshift,holddistance-holdlength[j]*speed-jYshift,100,holdlength[j]*speed+800-holddistance);
              fill(10,100,10);
              rect(jXshift,holddistance-holdlength[j]*speed-jYshift-10,100,10);
            }else{
              if(holddistance>0){
                rect(jXshift,holddistance-holdlength[j]*speed-jYshift,100,holdlength[j]*speed);
                fill(10,100,10);
                rect(jXshift,holddistance-holdlength[j]*speed-jYshift-10,100,10);
                if(hold[j]>10||drag[j]!=0||tap[j]!=0){
                  strokeWeight(4);
                  stroke(200,150,0);
                }else{
                  strokeWeight(2);
                  stroke(60,150,60);
                }
                rect(jXshift,holddistance-jYshift,100,10);
              }
            }
          }
        }
      }
    }
  }
  
  for(let k=0;k<=chartLength - 1;k++){
    if(drag[k]!=0){
      if(drag[k]==1||drag[k]==12||drag[k]==13||drag[k]==14||drag[k]==123||drag[k]==124||drag[k]==134||drag[k]==1234){
        if(draginvisible[k]!=1&&draginvisible[k]!=12&&draginvisible[k]!=13&&draginvisible[k]!=14&&draginvisible[k]!=123&&draginvisible[k]!=124&&draginvisible[k]!=134&&draginvisible[k]!=1234){
          dragdistance=time*speed-k*speed;
          fill(250,250,150);
          if(drag[k]>10||hold[k]!=0||tap[k]!=0){
            strokeWeight(4);
            stroke(200,150,0);
          }else{
            strokeWeight(2);
            stroke(150,150,0);
          }
          if(dragdistance<800){
            rect(fXshift,dragdistance-fYshift,100,10);
          }
        }
      }
      if(drag[k]==2||drag[k]==12||drag[k]==23||drag[k]==24||drag[k]==123||drag[k]==124||drag[k]==234||drag[k]==1234){
        if(draginvisible[k]!=2&&draginvisible[k]!=12&&draginvisible[k]!=23&&draginvisible[k]!=24&&draginvisible[k]!=123&&draginvisible[k]!=124&&draginvisible[k]!=234&&draginvisible[k]!=1234){
          dragdistance=time*speed-k*speed;
          fill(250,250,150);
          if(drag[k]>10||hold[k]!=0||tap[k]!=0){
            strokeWeight(4);
            stroke(200,150,0);
          }else{
            strokeWeight(2);
            stroke(150,150,0);
          }
          if(dragdistance<800){
            rect(gXshift,dragdistance-gYshift,100,10);
          }
        }
      }
      if(drag[k]==3||drag[k]==13||drag[k]==23||drag[k]==34||drag[k]==123||drag[k]==134||drag[k]==234||drag[k]==1234){
        if(draginvisible[k]!=3&&draginvisible[k]!=13&&draginvisible[k]!=23&&draginvisible[k]!=34&&draginvisible[k]!=123&&draginvisible[k]!=134&&draginvisible[k]!=234&&draginvisible[k]!=1234){
          dragdistance=time*speed-k*speed;
          fill(250,250,150);
          if(drag[k]>10||hold[k]!=0||tap[k]!=0){
            strokeWeight(4);
            stroke(200,150,0);
          }else{
            strokeWeight(2);
            stroke(150,150,0);
          }
          if(dragdistance<800){
            rect(hXshift,dragdistance-hYshift,100,10);
          }
        }
      }
      if(drag[k]==4||drag[k]==14||drag[k]==24||drag[k]==34||drag[k]==124||drag[k]==134||drag[k]==234||drag[k]==1234){
        if(draginvisible[k]!=4&&draginvisible[k]!=14&&draginvisible[k]!=24&&draginvisible[k]!=34&&draginvisible[k]!=124&&draginvisible[k]!=134&&draginvisible[k]!=234&&draginvisible[k]!=1234){
          dragdistance=time*speed-k*speed;
          fill(250,250,150);
          if(drag[k]>10||hold[k]!=0||tap[k]!=0){
            strokeWeight(4);
            stroke(200,150,0);
          }else{
            strokeWeight(2);
            stroke(150,150,0);
          }
          if(dragdistance<800){
            rect(jXshift,dragdistance-jYshift,100,10);          
          }
        }
      }
    }
  }
  
  for(let i=0;i<=chartLength - 1;i++){
    if(tap[i]!=0){
      if(tap[i]==1||tap[i]==12||tap[i]==13||tap[i]==14||tap[i]==123||tap[i]==124||tap[i]==134||tap[i]==1234){
        if(tapinvisible[i]!=1&&tapinvisible[i]!=12&&tapinvisible[i]!=13&&tapinvisible[i]!=14&&tapinvisible[i]!=123&&tapinvisible[i]!=124&&tapinvisible[i]!=134&&tapinvisible[i]!=1234){
          tapdistance=time*speed-i*speed;
          fill(150,170,200);
          if(tap[i]>10||hold[i]!=0||drag[i]!=0){
            strokeWeight(4);
            stroke(200,150,0);
          }else{
            strokeWeight(2);
            stroke(50,100,100);
          }
          if(tapdistance<800){
            rect(fXshift,tapdistance-fYshift,100,10);
          }
        }
      }
      if(tap[i]==2||tap[i]==12||tap[i]==23||tap[i]==24||tap[i]==123||tap[i]==124||tap[i]==234||tap[i]==1234){
        if(tapinvisible[i]!=2&&tapinvisible[i]!=12&&tapinvisible[i]!=23&&tapinvisible[i]!=24&&tapinvisible[i]!=123&&tapinvisible[i]!=124&&tapinvisible[i]!=234&&tapinvisible[i]!=1234){
          tapdistance=time*speed-i*speed;
          fill(150,170,200);
          if(tap[i]>10||hold[i]!=0||drag[i]!=0){
            strokeWeight(4);
            stroke(200,150,0);
          }else{
            strokeWeight(2);
            stroke(50,100,100);
          }
          if(tapdistance<800){
            rect(gXshift,tapdistance-gYshift,100,10);
          }
        }
      }
      if(tap[i]==3||tap[i]==13||tap[i]==23||tap[i]==34||tap[i]==123||tap[i]==134||tap[i]==234||tap[i]==1234){
        if(tapinvisible[i]!=3&&tapinvisible[i]!=13&&tapinvisible[i]!=23&&tapinvisible[i]!=34&&tapinvisible[i]!=123&&tapinvisible[i]!=134&&tapinvisible[i]!=234&&tapinvisible[i]!=1234){
          tapdistance=time*speed-i*speed;
          fill(150,170,200);
          if(tap[i]>10||hold[i]!=0||drag[i]!=0){
            strokeWeight(4);
            stroke(200,150,0);
          }else{
            strokeWeight(2);
            stroke(50,100,100);
          }
          if(tapdistance<800){
            rect(hXshift,tapdistance-hYshift,100,10);
          }
        }
      }
      if(tap[i]==4||tap[i]==14||tap[i]==24||tap[i]==34||tap[i]==124||tap[i]==134||tap[i]==234||tap[i]==1234){
        if(tapinvisible[i]!=4&&tapinvisible[i]!=14&&tapinvisible[i]!=24&&tapinvisible[i]!=34&&tapinvisible[i]!=124&&tapinvisible[i]!=134&&tapinvisible[i]!=234&&tapinvisible[i]!=1234){
          tapdistance=time*speed-i*speed;
          fill(150,170,200);
          if(tap[i]>10||hold[i]!=0||drag[i]!=0){
            strokeWeight(4);
            stroke(200,150,0);
          }else{
            strokeWeight(2);
            stroke(50,100,100);
          }
          if(tapdistance<800){
            rect(jXshift,tapdistance-jYshift,100,10);          
          }
        }
      }
    }
  }
  
  linetype=2;
  
  fXshift=100;
  gXshift=200;
  hXshift=300;
  jXshift=400;
  
  fYshift=100;  
  gYshift=fYshift;
  hYshift=fYshift;
  jYshift=fYshift;
  
  if(time>=96*8+800/speed&&time<=96*11+800/speed){
    fYshift=100+sin(time*360/96/15)*20;  
    gYshift=fYshift;
    hYshift=fYshift;
    jYshift=fYshift;
  }
  if(time>=96*11+800/speed&&time<=96*11+36+800/speed){
    fYshift=100+(time-96*11-800/speed)*200/36;  
    gYshift=fYshift;
    hYshift=fYshift;
    jYshift=fYshift;
  }
  if(time>=96*11+36+800/speed&&time<=96*15+800/speed){
    fYshift=300;  
    gYshift=fYshift;
    hYshift=fYshift;
    jYshift=fYshift;
  }
  
  if(time>=96*12+800/speed&&time<=96*13+48+800/speed){
    if(sin(((time-96*12-800/speed)/15)%180)<=0){
      fXshift=100+sin(((time-96*12-800/speed)/15)%180)*50;  
    }
    if(sin(((time-96*12-800/speed)/15)%180)>=0){
      jXshift=400+sin(((time-96*12-800/speed)/15)%180)*50;  
    }
  }
  if(time>=96*13+48+800/speed&&time<=96*15+800/speed){
    if(sin(((time-96*12-800/speed)/15)%180)>=0){
      fXshift=100-sin(((time-96*12-800/speed)/15)%180)*50;  
      jXshift=400+sin(((time-96*12-800/speed)/15)%180)*50; 
    }
    if(sin(((time-96*12-800/speed)/15)%180)<=0){
      fXshift=100+sin(((time-96*12-800/speed)/15)%180)*50;  
      jXshift=400-sin(((time-96*12-800/speed)/15)%180)*50; 
    }
  }
  
  if(time>=96*15+800/speed&&time<=96*15+8+800/speed){
    fYshift=300-(time-96*15-800/speed)*200/3/8;  
    gYshift=fYshift;
    hYshift=fYshift;
    jYshift=fYshift;
  }
  if(time>=96*15+8+800/speed&&time<=96*15+16+800/speed){
    fYshift=300-200/3;  
    gYshift=fYshift;
    hYshift=fYshift;
    jYshift=fYshift;
  }
  if(time>=96*15+16+800/speed&&time<=96*15+24+800/speed){
    fYshift=300-200/3-(time-96*15-16-800/speed)*200/3/8;  
    gYshift=fYshift;
    hYshift=fYshift;
    jYshift=fYshift;
  }
  if(time>=96*15+24+800/speed&&time<=96*15+32+800/speed){
    fYshift=300-200/3*2;  
    gYshift=fYshift;
    hYshift=fYshift;
    jYshift=fYshift;
  }
  if(time>=96*15+32+800/speed&&time<=96*15+40+800/speed){
    fYshift=300-200/3*2-(time-96*15-32-800/speed)*200/3/8;  
    gYshift=fYshift;
    hYshift=fYshift;
    jYshift=fYshift;
  }
  if(time>=96*23+800/speed&&time<=96*23+72+800/speed){
    fXshift=100-(time-96*23-800/speed)/72*50;
    gXshift=200-(time-96*23-800/speed)/72*50;
    hXshift=300+(time-96*23-800/speed)/72*50;
    jXshift=400+(time-96*23-800/speed)/72*50;
  }
  if(time>=96*23+72+800/speed&&time<=96*27+72+800/speed){
    fXshift=50;
    gXshift=150;
    hXshift=350;
    jXshift=450;
  }
  if(time>=96*27+72+800/speed&&time<=96*27+84+800/speed){
    fXshift=50+(time-96*27-72-800/speed)/12*50; 
    gXshift=150+(time-96*27-72-800/speed)/12*50;
    hXshift=350-(time-96*27-72-800/speed)/12*50;
    jXshift=450-(time-96*27-72-800/speed)/12*50;
  }
  if(time>=96*27+84+800/speed&&time<=96*31+72+800/speed){
    fXshift=100;  
    gXshift=200;
    hXshift=300;
    jXshift=400;
  }
  if(time>=96*27+72+800/speed&&time<=96*27+84+800/speed){
    fYshift=100+(time-96*27-72-800/speed)/12*180;  
    gYshift=fYshift;
    hYshift=fYshift;
    jYshift=fYshift;
  }
  if(time>=96*27+84+800/speed&&time<=96*28+800/speed){
    fYshift=280;  
    gYshift=fYshift;
    hYshift=fYshift;
    jYshift=fYshift;
  }
  if(time>=96*28+800/speed&&time<=96*28+6+800/speed){
    fYshift=280-(time-96*28-800/speed)/6*30;  
    gYshift=fYshift;
    hYshift=fYshift;
    jYshift=fYshift;
  }
  if(time>=96*28+6+800/speed&&time<=96*28+48+800/speed){
    fYshift=250;  
    gYshift=fYshift;
    hYshift=fYshift;
    jYshift=fYshift;
  }
  if(time>=96*28+48+800/speed&&time<=96*28+54+800/speed){
    fYshift=250-(time-96*28-48-800/speed)/6*30;  
    gYshift=fYshift;
    hYshift=fYshift;
    jYshift=fYshift;
  }
  if(time>=96*28+54+800/speed&&time<=96*29+800/speed){
    fYshift=220;  
    gYshift=fYshift;
    hYshift=fYshift;
    jYshift=fYshift;
  }
  if(time>=96*29+800/speed&&time<=96*29+6+800/speed){
    fYshift=220-(time-96*29-800/speed)/6*30;  
    gYshift=fYshift;
    hYshift=fYshift;
    jYshift=fYshift;
  }
  if(time>=96*29+6+800/speed&&time<=96*29+48+800/speed){
    fYshift=190;  
    gYshift=fYshift;
    hYshift=fYshift;
    jYshift=fYshift;
  }
  if(time>=96*29+48+800/speed&&time<=96*29+54+800/speed){
    fYshift=190-(time-96*29-48-800/speed)/6*30;  
    gYshift=fYshift;
    hYshift=fYshift;
    jYshift=fYshift;
  }
  if(time>=96*29+54+800/speed&&time<=96*29+60+800/speed){
    fYshift=160;  
    gYshift=fYshift;
    hYshift=fYshift;
    jYshift=fYshift;
  }
  if(time>=96*29+60+800/speed&&time<=96*29+66+800/speed){
    fYshift=160-(time-96*29-60-800/speed)/6*30;  
    gYshift=fYshift;
    hYshift=fYshift;
    jYshift=fYshift;
  }
  if(time>=96*29+66+800/speed&&time<=96*29+72+800/speed){
    fYshift=130;  
    gYshift=fYshift;
    hYshift=fYshift;
    jYshift=fYshift;
  }
  if(time>=96*29+72+800/speed&&time<=96*29+76+800/speed){
    fYshift=130-(time-96*29-72-800/speed)/6*30;  
    gYshift=fYshift;
    hYshift=fYshift;
    jYshift=fYshift;
  }
  if(time>=96*29+72+800/speed){
    fYshift=100;  
    gYshift=fYshift;
    hYshift=fYshift;
    jYshift=fYshift;
  }
  if(time>=96*31+72+800/speed&&time<=96*32+800/speed){
    fXshift=100-(time-96*31-72-800/speed)/24*60; 
    gXshift=200-(time-96*31-72-800/speed)/24*20;
    hXshift=300+(time-96*31-72-800/speed)/24*20;
    jXshift=400+(time-96*31-72-800/speed)/24*60;
  }
  if(time>=96*32+800/speed){
    fXshift=40;  
    gXshift=180;
    hXshift=320;
    jXshift=460;
  }
  //1min=60sec=60000ms
  //1min=145beat=145/4*96frame=3480frame
  //60000ms/3480frame=17.2ms/frame
  //delay(4);
  if(time>=96*23+72+800/speed-(800-fYshift)/speed&&time<=96*23+72+800/speed){
    stroke(0,0,0);
    linetype=1;
    line(fXshift,(800-fYshift)/((800-fYshift)/speed)*(time-96*23-72-800/speed+(800-fYshift)/speed),fXshift,800-fYshift);
    line(fXshift+100,(800-fYshift)/((800-fYshift)/speed)*(time-96*23-72-800/speed+(800-fYshift)/speed),fXshift+100,800-fYshift);
    line(gXshift,(800-gYshift)/((800-gYshift)/speed)*(time-96*23-72-800/speed+(800-gYshift)/speed),gXshift,800-gYshift);
    line(gXshift+100,(800-gYshift)/((800-gYshift)/speed)*(time-96*23-72-800/speed+(800-gYshift)/speed),gXshift+100,800-gYshift);
    line(hXshift,(800-hYshift)/((800-hYshift)/speed)*(time-96*23-72-800/speed+(800-hYshift)/speed),hXshift,800-hYshift);
    line(hXshift+100,(800-hYshift)/((800-hYshift)/speed)*(time-96*23-72-800/speed+(800-hYshift)/speed),hXshift+100,800-hYshift);
    line(jXshift,(800-fYshift)/((800-fYshift)/speed)*(time-96*23-72-800/speed+(800-jYshift)/speed),jXshift,800-jYshift);
    line(jXshift+100,(800-fYshift)/((800-fYshift)/speed)*(time-96*23-72-800/speed+(800-jYshift)/speed),jXshift+100,800-jYshift);
  }
  if(time>96*23+72+800/speed){
    linetype=1;
  }
  
  if(linetype==1||linetype==2||linetype==3){
    stroke(0,0,0);
    strokeWeight(4);
    line(fXshift,800-fYshift,fXshift+100,800-fYshift);
    line(gXshift,800-gYshift,gXshift+100,800-gYshift);
    line(hXshift,800-hYshift,hXshift+100,800-hYshift);
    line(jXshift,800-jYshift,jXshift+100,800-jYshift);
  }
  if(linetype==2){
    stroke(0,0,0);
    strokeWeight(2);
    line(fXshift,0,fXshift,800-fYshift);
    line(fXshift+100,0,fXshift+100,800-fYshift);
    line(gXshift,0,gXshift,800-gYshift);
    line(gXshift+100,0,gXshift+100,800-gYshift);
    line(hXshift,0,hXshift,800-hYshift);
    line(hXshift+100,0,hXshift+100,800-hYshift);
    line(jXshift,0,jXshift,800-jYshift);
    line(jXshift+100,0,jXshift+100,800-jYshift);
  }
  if(linetype==3){
    stroke(0,0,0);
    strokeWeight(2);
    line(fXshift,800,fXshift,800-fYshift);
    line(fXshift+100,800,fXshift+100,800-fYshift);
    line(gXshift,800,gXshift,800-gYshift);
    line(gXshift+100,800,gXshift+100,800-gYshift);
    line(hXshift,800,hXshift,800-hYshift);
    line(hXshift+100,800,hXshift+100,800-hYshift);
    line(jXshift,800,jXshift,800-jYshift);
    line(jXshift+100,800,jXshift+100,800-jYshift);
  }

  time=time+1;
  
  /*if (comment==1){
    textSize(25); 
    text("PERFECT", 250, 50);
  }else{
    if(comment==2){
      textSize(25); 
      text("MISS", 250, 50);
    }
  }*/
}
