console.log("Q7");

code="CAATGGCTAGGTACTATGTATGAGATCATGATCTTTACAAATCCGAG";

function getcomp(a){
	switch (a) {
		case"A":
			return "T";
		case "T":
			return "A";
		case "G":
			return "C";
		case "C":
			return "G";
		}
	}

function reverse(s){
    return s.split("").reverse().join("");
}

rev="";
for(i=0;i<code.length;i++){
	rev+=getcomp(code[i]);
	}
console.log(reverse(rev));

