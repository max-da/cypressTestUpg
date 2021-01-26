describe("registerTest", ()=>{
    it("enter", ()=>{
        cy.visit("/")
        cy.get("a").click()
        cy.end()
        })

    it("tryOnlyuser",()=>{
        typer("[name=username]", "username")
        submitter()
        shouldUrl("Fel")
        
    })
 
    it("tryOnlyEmail",()=>{
        typer("[name=email]", "max@outlook.com")
        submitter()
        shouldUrl("kort")
    })

    it("tryOnlyPwd1",()=>{
        typer("[name=password]", "123")
        submitter()
        shouldUrl("kort")
        
    })

    it("tryOnlyPwd2",()=>{
        typer("[name=passwordConfirm]", "123")
        submitter()
        shouldUrl("kort")
    })

    it("tryUser+Pwd1",()=> {
        typer("[name=username]", "username")
        typer("[name=password]", "123")
        submitter()
        shouldUrl("Fel")
    })

    it("tryUser+Pwd2",()=> {
        typer("[name=username]", "username")
        typer("[name=passwordConfirm]", "123")
        submitter()
        shouldUrl("Fel")
    })

    it("tryUser+Pwd1+pwd2",()=> {
        typer("[name=username]", "username")
        typer("[name=password]", "123")
        typer("[name=passwordConfirm]", "123")
        submitter()
        shouldUrl("Fel")
    })
        ////Email
    it("tryEmail+Pwd1",()=> {
        typer("[name=email]", "max@outlook.com")
        typer("[name=password]", "123")
        submitter()
        shouldUrl("kort")
    })

    it("tryEmail+Pwd2",()=> {
        typer("[name=email]", "max@outlook.com")
        typer("[name=passwordConfirm]", "123")
        submitter()
        shouldUrl("kort")
    })

    it("tryEmail+Pwd1+pwd2",()=> {
        typer("[name=email]", "max@outlook.com")
        typer("[name=password]", "123")
        typer("[name=passwordConfirm]", "123")
        submitter()
        shouldUrl("kort")
    })

    ///ALL

    it("tryAllShortUsr",()=>{
        typer("[name=username]", "u")
        typer("[name=email]", "max@outlook.com")
        typer("[name=password]", "123")
        typer("[name=passwordConfirm]", "123")
        submitter()
        shouldUrl("kort")
    })

    it("tryAllMalformedEmail",()=>{
        typer("[name=username]", "username")
        typer("[name=email]", "max@")
        typer("[name=password]", "123")
        typer("[name=passwordConfirm]", "123")
        submitter()
        shouldUrl("Fel")
    })

    it("tryAll",()=>{
        typer("[name=username]", "username")
        typer("[name=email]", "max@domain.se")
        typer("[name=password]", "123")
        typer("[name=passwordConfirm]", "123")
        submitter()
        shouldUrl("registrerad")
      
    })
})

    
function submitter(){
        cy.get("[type=submit]").click();
     
}

function typer(location,input){
    cy.get(location).type(input)
    
    
}

function shouldUrl(urlMessage){
    cy.url().should("include",urlMessage)
}