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
       // cy.contain("kort").should()
    })

    it("tryOnlyPwd1",()=>{
        typer("[name=password]", "123")
        submitter()
    })

    it("tryOnlyPwd2",()=>{
        typer("[name=passwordConfirm]", "123")
        submitter()
    })

    it("tryUser+Pwd1",()=> {
        typer("[name=username]", "username")
        typer("[name=password]", "123")
        submitter()
    })

    it("tryUser+Pwd2",()=> {
        typer("[name=username]", "username")
        typer("[name=passwordConfirm]", "123")
        submitter()
    })

    it("tryUser+Pwd1+pwd2",()=> {
        typer("[name=username]", "username")
        typer("[name=password]", "123")
        typer("[name=passwordConfirm]", "123")
        submitter()
    })
        ////Email
    it("tryEmail+Pwd1",()=> {
        typer("[name=email]", "max@outlook.com")
        typer("[name=password]", "123")
        submitter()
    })

    it("tryEmail+Pwd2",()=> {
        typer("[name=email]", "max@outlook.com")
        typer("[name=passwordConfirm]", "123")
        submitter()
    })

    it("tryEmail+Pwd1+pwd2",()=> {
        typer("[name=email]", "max@outlook.com")
        typer("[name=password]", "123")
        typer("[name=passwordConfirm]", "123")
        submitter()
    })

    ///ALL

    it("tryAllShortUsr",()=>{
        typer("[name=username]", "u")
        typer("[name=email]", "max@outlook.com")
        typer("[name=password]", "123")
        typer("[name=passwordConfirm]", "123")
        submitter()
    })

    it("tryAllMalformedEmail",()=>{
        typer("[name=username]", "username")
        typer("[name=email]", "max@")
        typer("[name=password]", "123")
        typer("[name=passwordConfirm]", "123")
        submitter()
    })

    it("tryAll",()=>{
        typer("[name=username]", "username")
        typer("[name=email]", "max@domain.se")
        typer("[name=password]", "123")
        typer("[name=passwordConfirm]", "123")
        submitter()
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