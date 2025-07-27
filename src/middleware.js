import { NextResponse } from 'next/server'

 
// This function can be marked `async` if using `await` inside
export function middleware(request) {

    const dummyUserData = {
        role : "user",
        email : 'test@gg.com'
    } 

    let isServicesPage = request.nextUrl.pathname.startsWith('/services')

    let isAdmin = dummyUserData.role == 'admin'

    if(!isAdmin  && isServicesPage){
    
        return NextResponse.redirect(new URL('/login', request.url))
        
    }






  return NextResponse.next()
}
 
