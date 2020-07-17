const particles=[];
class Particles{
	constructor()
	{
		const color=['red','blue','pink','green','purple','cyan'];
		this.x=0;
		this.y=0;
		this.el=document.createElement('div');
		this.el.className='particle';
		this.speed=Math.random()*2+5;
		this.angle=Math.random()*Math.PI * 2;
		this.vx=Math.cos(this.angle)*this.speed;
		this.vy=-Math.sin(this.angle)*this.speed;

		this.el.style.left=this.x+'px';
		this.el.style.top=this.y+'px';
		this.el.style.backgroundColor=color[parseInt(Math.random()*color.length)];
		document.body.appendChild(this.el);

		setTimeout(()=>{
			this.el.remove();
			particles.splice(particles.indexOf(this),1);
		},900);
	}
	setPosition(x,y)
	{
		this.x=x;
		this.y=y;
		this.el.style.left=this.x+'px';
		this.el.style.top=this.y+'px';
	}
	update(){
		this.setPosition(this.vx+this.x,this.vy+this.y);
		this.vy+=0.05;
	}
}



class Firework{
	constructor()
	{
		this.x=window.innerWidth/2;
		this.y=window.innerHeight-25;
		this.el=document.createElement('div');
		this.el.className='firework';
		this.speed=15;
		this.angle=(Math.random()*Math.PI/2)+Math.PI/4;
		this.vx=Math.cos(this.angle)*this.speed;
		this.vy=-Math.sin(this.angle)*this.speed;

		this.el.style.left=this.x+'px';
		this.el.style.top=this.y+'px';
		document.body.appendChild(this.el);

		setTimeout(()=>{
			this.el.remove();
			fireworks.splice(fireworks.indexOf(this),1);
			this.explode();
		},1700);
	}

	update(){
		this.x+=this.vx;
		this.y+=this.vy;
		this.el.style.left=this.x+'px';
		this.el.style.top=this.y+'px';
		this.vy+=0.15;
	}
	explode()
	{
		for(let i=0;i<50;i++)
		{
			const particle = new Particles();
			particle.setPosition(this.x,this.y);
			particles.push(particle);
		}
		
	}
}
const fireworks=[];

setInterval(()=>{
	fireworks.forEach(firework => firework.update());
	particles.forEach(particle => particle.update());
	},10);

setInterval(() =>{
	const firework=new Firework();
	fireworks.push(firework)
	},300);
