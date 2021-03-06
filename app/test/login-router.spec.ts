
class LoginRouter{
    route(httpRequest:any){
       if(!httpRequest.body.email){
           return {
               statusCode: 400
           }
       }
    }
}

describe('Login Router', () =>{
    test('Should return 400 if no email is provided', () =>{
       const sut = new LoginRouter()
       const httpRequest =  {
           body: 'any_password'
       } 
       const httpResponse = sut.route(httpRequest)
       expect(httpResponse?.statusCode).toBe(400)
    })
})