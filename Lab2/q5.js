console.log("q5");
a=[2.0, 5.0, 9.0, 37.0, 56.0, 98.9, 4.6];
b=[3.0, 7.0, 11.0, 47.0, 78.0, 86.0, 5.0];
meana=0;
meanb=0;
for(i=0; i<a.length; i++){
	meana+=a[i];
	meanb+=b[i];
}
meana = meana/a.length;
meanb = meanb/b.length;
console.log(meana+", "+meanb);
A=[];
B=[];
for(i=0;i<7;i++){
	A[i]=a[i]-meana;
	B[i]=b[i]-meanb;
	}
AxB=[];
A2=[];
B2=[];

SumAxB=0;
SumA2=0;
SumB2=0;
for(i=0;i<7;i++){
	AxB[i]=A[i]*B[i];	
	A2[i]=A[i]*A[i];
	B2[i]=B[i]*B[i];
	
	SumAxB+=AxB[i];
	SumA2+=A2[i];
	SumB2+=B2[i];
}

soln = SumAxB/Math.sqrt(SumA2*SumB2);

console.log("Solution: "+ soln);

