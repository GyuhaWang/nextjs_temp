import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
	console.log('middleware check');
	//const jwt = request.cookies.get(process.env.NEXT_PUBLIC_AUTH_TOKEN);
	const jwt = true; // 로그인 여부
	if (!jwt) {
		return NextResponse.redirect(new URL('/login', request.url));
	}

	// 로그인 상태면 원래 요청한 경로로 이동한다.
	return NextResponse.next();
}

export const config = {
	matcher: ['/main/:path+', '/main'],
};
