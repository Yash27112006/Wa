class Mail{
  
    constructor(){
        this.from = createInput('Enter your email Address');
        this.from.style('width','300px');
        this.myTextArea = createElement('textarea');
        this.myTextArea.attribute("rows","10");
        this.myTextArea.attribute("cols","41");
        this.to = "yashu53421@gmail.com";
        this.button = createButton("Send Email");
    }
    sendMail(){
       this.from.position(displayWidth/2-100,displayHeight-350);
       this.myTextArea.position(displayWidth/2-100,displayHeight-310);
       this.button.position(displayWidth/2+130,displayHeight-128);

       this.button.mousePressed(()=>{
        Email.send({
            SecureToken : "8f3f3aff-06d2-493b-aa98-1d135b73a48b",
            To : this.to,
            From : this.from.value(),
            Subject : "Found Someone",
             Body :this.myTextArea.value()
        }).then(
           message => alert('Email is sent successfully')
        ); 
       });
    }
}

