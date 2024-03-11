import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className='flex min-h-screen flex-row items-center justify-center p-24 gap-x-10 '>
        <div>
          CSR
          <ul>
            <div>
              <li className='list-disc'>
                정의: CSR은 웹 애플리케이션의 렌더링이 사용자의 브라우저(클라이언트 측)에서 일어나는 방식이다.
                서버에서는 HTML, CSS, JavaScript 등의 정적 파일만 전송하고, 모든 렌더링은 클라이언트 측에서 JavaScript를
                이용해 수행된다.
              </li>
              <li className='list-disc'>
                장점: 한 번의 페이지 로드 이후에는 사용자 인터랙션에 빠르게 응답할 수 있으며, 동적인 사용자 경험 제공이
                용이하다.
              </li>
              <li className='list-disc'>단점: 초기 로딩 시간(TTV)이 길 수 있으며, SEO에 불리할 수 있다.</li>
            </div>
          </ul>
        </div>
        <div>
          SSG
          <ul>
            <div>
              <li className='list-disc'>
                정의: SSG는 빌드 타임에 사이트의 모든 페이지를 미리 생성하여 정적 파일로 서버에 저장하는 방식이다. 이
                파일들은 요청이 있을 때 그대로 클라이언트에게 HTML 파일을 전달함. 최초 빌드시에만 생성된다.
              </li>
              <li className='list-disc'>장점: 페이지 로딩 속도(TTV)가 빠르다. SEO가 유리하다.</li>
              <li className='list-disc'>
                단점: 초사이트에 동적 요소가 필요한 경우 제한적일 수 있으며, 사이트 업데이트를 위해서는 전체 사이트를
                다시 빌드해야 한다.
              </li>
            </div>
          </ul>
        </div>
        <div>
          ISR
          <ul>
            <div>
              <li className='list-disc'>
                정의: ISR은 빌드 시 생성된 정적 페이지를 사용하되, 페이지 요청이 있을 때만 특정 페이지를 재생성하는
                방식이다.
              </li>
              <li className='list-disc'>
                장점: 정적 사이트의 빠른 로딩 속도와 SSR의 유연성을 결합했다. 설정한 주기마다 페이지를 재생성한다.
              </li>
              <li className='list-disc'>
                단점: 모든 페이지가 항상 최신 상태가 아닐 수 있기 때문에 동적인 콘텐츠를 다루기에 한계가 있다.
              </li>
            </div>
          </ul>
        </div>
        <div>
          SSR
          <ul>
            <div>
              <li className='list-disc'>
                정의: SSR은 서버에서 페이지의 HTML을 렌더링하여 사용자에게 전송하는 방식이다. 이는 사용자의 요청에 따라
                서버에서 각 페이지를 실시간으로 생성한다. 새로운 페이지 요청이 있을 때마다 서버에 요청하고 새로운
                페이지를 로드
              </li>
              <li className='list-disc'>
                장점: 초기 로딩 시간이 빠르고 (껍데기만 먼저 주고 hydration) , 검색 엔진 최적화에 유리하다.
              </li>
              <li className='list-disc'>
                단점: 사용자의 각 요청마다 페이지를 새로 렌더링해야 하므로 서버 부하가 증가할 수 있다.
              </li>
            </div>
          </ul>
        </div>
      </div>
    </main>
  );
}
