import { uuid } from 'uuidv4';
import { TestTodo, toTestTodo } from './type';

const rawData: Array<any> = [
  {
    title: '팬들은 아티스트가 진행 중인 실시간 영상을 볼 수 있다. ',
    importance: 3,
    from: '1994-10-05-00-00',
    until: '2022-11-21-07-43',
    content: '',
  },
  {
    title: '아티스트와 팬은 아티스트의 비디오를 볼 수 있다. ',
    importance: 3,
    from: '1994-10-05-00-00',
    until: '2022-11-21-09-35',
    content: '',
  },
  {
    title: '팬은 아티스트 팬 게시판에서 응원의 댓글을 남길 수 있다.',
    importance: 2,
    from: '1994-10-05-00-00',
    until: '2022-11-21-09-52',
    content: '',
  },
  {
    title: '티켓 생성 시 이벤트 Title 을 작성할 수 있다.',
    importance: 2,
    from: '1994-10-05-00-00',
    until: '2022-11-21-11-32',
    content: '',
  },
  {
    title: '회원 여부 확인 시 회원이면 메인페이지로 이동하기',
    importance: 1,
    from: '1994-10-05-00-00',
    until: '2022-11-21-01-24',
    content: '',
  },
  {
    title: '사용자는 자신의 음성과 비디오를 조절할 수 있다.',
    importance: 1,
    from: '1994-10-05-00-00',
    until: '2022-11-21-04-22',
    content: '',
  },
  {
    title: '메인 페이지에서 팬은 새로운/다른 아티스트 목록을 확인할 수 있다. ',
    importance: 1,
    from: '1994-10-05-00-00',
    until: '2022-11-21-10-37',
    content: '',
  },
  // distant
  {
    title: '팬들은 아티스트의 활동 사진을 확인할 수 있다.',
    importance: 3,
    from: '1994-10-05-00-00',
    until: '2022-11-22-01-53',
    content: '',
  },
  {
    title: '팬들은 아티스트의 활동 영상을 확인할 수 있다.',
    importance: 3,
    from: '1994-10-05-00-00',
    until: '2022-11-22-07-40',
    content: '',
  },
  {
    title: '티켓팅이 진행 중일 때는 로딩창을 확인할 수 있다.',
    importance: 3,
    from: '1994-10-05-00-00',
    until: '2022-11-23-02-07',
    content: '',
  },
  {
    title: '티켓 판매 날짜와 시간을 정할 수 있다. ',
    importance: 3,
    from: '1994-10-05-00-00',
    until: '2022-11-23-03-25',
    content: '',
  },
  {
    title: '아티스트는 실시간 영상 버튼을 클릭하면 실시간 영상페이지로 넘어가게 된다.',
    importance: 3,
    from: '1994-10-05-00-00',
    until: '2022-11-23-04-07',
    content: '',
  },
  {
    title: '아티스트는 캘린더에서 일정을 클릭했을 때 미팅이 존재하면 해당 미팅의 정보를 볼 수 있다. ',
    importance: 3,
    from: '1994-10-05-00-00',
    until: '2022-11-23-10-49',
    content: '',
  },
  {
    title: '아티스트는 캘린더에서 날짜를 클릭했을 때 비어있으면 해당 날짜의 티켓 생성 모달을 볼 수 있다.',
    importance: 3,
    from: '1994-10-05-00-00',
    until: '2022-11-25-04-57',
    content: '',
  },
  {
    title: '각 티켓의 D-Day를 통해 남은 기한을 확인할 수 있다.',
    importance: 3,
    from: '1994-10-05-00-00',
    until: '2022-11-25-05-20',
    content: '',
  },
  {
    title: '회원 여부 확인 후 회원가입이 되어 있지 않으면 닉네임을 입력받고 핸드폰 인증받기',
    importance: 3,
    from: '1994-10-05-00-00',
    until: '2022-11-26-03-57',
    content: '',
  },
  {
    title: '아티스트와 팬은 미팅방과 같은 방식으로 실시간 채팅을 사용할 수 있다. ',
    importance: 3,
    from: '1994-10-05-00-00',
    until: '2022-11-27-04-34',
    content: '',
  },
  {
    title: '실시간 영상이 시작되면 아티스트 팬 게시판에 실시간 영상의 썸네일을 볼 수 있다.',
    importance: 3,
    from: '1994-10-05-00-00',
    until: '2022-11-27-05-48',
    content: '',
  },
  {
    title: '팬은 티켓팅 시작 전에 티켓팅까지 남은 시간을 확인할 수 있다.',
    importance: 3,
    from: '1994-10-05-00-00',
    until: '2022-11-27-10-43',
    content: '',
  },
  {
    title: '아티스트는 전체 미팅 방을 한번에 삭제할 수 있다. ',
    importance: 2,
    from: '1994-10-05-00-00',
    until: '2022-11-22-07-48',
    content: '',
  },
  {
    title: '아티스트는 특정 팬을 강퇴할 수 있다. ',
    importance: 2,
    from: '1994-10-05-00-00',
    until: '2022-11-22-10-31',
    content: '',
  },
  {
    title: '아티스트는 개별 방 하나하나 클릭하여 삭제할 수 있다.',
    importance: 2,
    from: '1994-10-05-00-00',
    until: '2022-11-23-02-44',
    content: '',
  },
  {
    title: '팬이 기록 버튼을 누르면 녹화 중단 버튼으로 바뀌며 녹화가 시작하게 된다.',
    importance: 2,
    from: '1994-10-05-00-00',
    until: '2022-11-23-03-54',
    content: '',
  },
  {
    title: '사용자는 현재 화상 채팅에 참여 중인 인원을 확인할 수 있다. ',
    importance: 2,
    from: '1994-10-05-00-00',
    until: '2022-11-23-06-06',
    content: '',
  },
  {
    title: '팬이 녹화 중단 버튼을 누르면 해당 영상을 추후 확인할 수 있다. ',
    importance: 2,
    from: '1994-10-05-00-00',
    until: '2022-11-23-09-34',
    content: '',
  },
  {
    title: '팬은 미팅 30분전/5분 전에 미팅 알람을 받을 수 있다. ',
    importance: 2,
    from: '1994-10-05-00-00',
    until: '2022-11-23-11-22',
    content: '',
  },
  {
    title: '티켓의 마감일이 1일 보다 적게 남았을 경우 시로 나타내준다. ',
    importance: 2,
    from: '1994-10-05-00-00',
    until: '2022-11-24-03-46',
    content: '',
  },
  {
    title: '작성한 댓글의 목록을 확인할 수 있다. ',
    importance: 2,
    from: '1994-10-05-00-00',
    until: '2022-11-24-04-41',
    content: '',
  },
  {
    title: '작성한 댓글을 삭제할 수 있다. ',
    importance: 2,
    from: '1994-10-05-00-00',
    until: '2022-11-24-05-14',
    content: '',
  },
  {
    title: '팬이 채팅을 남겼을 때 5초 뒤에 또다른 채팅을 남길 수 있다. ',
    importance: 2,
    from: '1994-10-05-00-00',
    until: '2022-11-24-10-44',
    content: '',
  },
  {
    title: '미팅의 정보는 한팀 당 인원, 미팅 시간, 미팅 진행 리스트이다.',
    importance: 2,
    from: '1994-10-05-00-00',
    until: '2022-11-25-05-44',
    content: '',
  },
  {
    title: '팬은 한번만 기록 버튼을 누를 수 있다. ',
    importance: 2,
    from: '1994-10-05-00-00',
    until: '2022-11-25-06-11',
    content: '',
  },
  {
    title: '티켓의 마감일이 1시간보다 적게 남았을 경우 분으로 나타낸다.',
    importance: 2,
    from: '1994-10-05-00-00',
    until: '2022-11-26-01-03',
    content: '',
  },
  {
    title: '아티스트는 도배하는 팬들의 메시지를 차단할 수 있다. ',
    importance: 2,
    from: '1994-10-05-00-00',
    until: '2022-11-26-01-37',
    content: '',
  },
  {
    title: '아티스트가 실시간 영상 종료를 클릭하였을 때 영상으로 기록할지 삭제할지 선택할 수 있다.',
    importance: 2,
    from: '1994-10-05-00-00',
    until: '2022-11-26-02-51',
    content: '',
  },
  {
    title: '댓글 작성 시 팬의 닉네임, 작성 날짜, 댓글 내용을 볼 수 있다.',
    importance: 2,
    from: '1994-10-05-00-00',
    until: '2022-11-26-04-12',
    content: '',
  },
  {
    title: '아티스트는 캘린더에서 일정을 클릭했을 때 미팅이 존재하면 해당 미팅을 수정할 수 있다.',
    importance: 2,
    from: '1994-10-05-00-00',
    until: '2022-11-27-10-34',
    content: '',
  },
  {
    title: '사용자는 자신이 입력한 채팅을 같은 방에 있는 다른 사람들에게 전달 할 수 있다.',
    importance: 1,
    from: '1994-10-05-00-00',
    until: '2022-11-22-05-13',
    content: '',
  },
  {
    title: '티켓팅 시작 시간이 되면 구매할 수 있다.',
    importance: 1,
    from: '1994-10-05-00-00',
    until: '2022-11-22-06-17',
    content: '',
  },
  {
    title: '메인 페이지에서 팬은 구독한 아티스트의 목록을 확인할 수 있다.',
    importance: 1,
    from: '1994-10-05-00-00',
    until: '2022-11-23-03-33',
    content: '',
  },
  {
    title: '미팅 시작 날짜와 시간을 정할 수 있다. ',
    importance: 1,
    from: '1994-10-05-00-00',
    until: '2022-11-23-03-54',
    content: '',
  },
  {
    title: '아티스트는 미팅 목록 중 하나를 클릭 시 미팅방을 옮길 수 있다.',
    importance: 1,
    from: '1994-10-05-00-00',
    until: '2022-11-23-09-34',
    content: '',
  },
  {
    title: '티켓 페이지에서 사용자는 현재 판매중인 티켓목록을 확인할 수  있다.',
    importance: 1,
    from: '1994-10-05-00-00',
    until: '2022-11-23-10-35',
    content: '',
  },
  {
    title: '소셜 로그인(네이버, 구글) 구현하기',
    importance: 1,
    from: '1994-10-05-00-00',
    until: '2022-11-24-03-57',
    content: '',
  },
  {
    title: '사용자는 아티스트가 입력한 채팅과 사용자가 입력한 채팅의 색을 구분하여 확인할 수 있다.',
    importance: 1,
    from: '1994-10-05-00-00',
    until: '2022-11-24-09-13',
    content: '',
  },
  {
    title: '한팀 당 미팅 인원을 설정할 수 있다. (1:[1~5])',
    importance: 1,
    from: '1994-10-05-00-00',
    until: '2022-11-24-11-34',
    content: '',
  },
  {
    title: '아티스트는 판매한 티켓의 미팅 시간을 다가오는 날짜 순으로 확인할 수 있다.',
    importance: 1,
    from: '1994-10-05-00-00',
    until: '2022-11-25-01-45',
    content: '',
  },
  {
    title: '팬은 미팅이 다가오는 날짜 순으로 자신이 예약한 티켓 목록을 확인할 수 있다.',
    importance: 1,
    from: '1994-10-05-00-00',
    until: '2022-11-25-03-45',
    content: '',
  },
  {
    title: '소셜 로그인(네이버, 구글) 로직 이후 회원 여부 확인하기',
    importance: 1,
    from: '1994-10-05-00-00',
    until: '2022-11-25-04-20',
    content: '',
  },
  {
    title: '팬은 입장하기 버튼을 통하여 미팅방에 접속할 수 있다.',
    importance: 1,
    from: '1994-10-05-00-00',
    until: '2022-11-25-04-26',
    content: '',
  },
  {
    title: '아티스트는 캘린더를 통하여 미팅 시간 스케줄을 확인할 수 있다.',
    importance: 1,
    from: '1994-10-05-00-00',
    until: '2022-11-26-01-27',
    content: '',
  },
  {
    title: '티켓을 클릭하면 티켓 정보 페이지로 이동한다.',
    importance: 1,
    from: '1994-10-05-00-00',
    until: '2022-11-26-02-18',
    content: '',
  },
  {
    title: '티켓 판매 수량과 개당 가격(붕어빵)을 설정할 수 있다. ',
    importance: 1,
    from: '1994-10-05-00-00',
    until: '2022-11-26-04-00',
    content: '',
  },
  {
    title: '초기 아티스트 미팅방 접속 시 휴게방으로 들어가게 된다.',
    importance: 1,
    from: '1994-10-05-00-00',
    until: '2022-11-26-05-51',
    content: '',
  },
  {
    title: '사용자는 다른 사람이 입력한 채팅을 실시간으로 확인 할 수 있다.',
    importance: 1,
    from: '1994-10-05-00-00',
    until: '2022-11-26-06-10',
    content: '',
  },
  {
    title: '아티스트는 미팅 목록을 시간 순대로 확인할 수 있다.',
    importance: 1,
    from: '1994-10-05-00-00',
    until: '2022-11-26-06-30',
    content: '',
  },
  {
    title: '한팀 당 미팅 시간을 설정할 수 있다. ',
    importance: 1,
    from: '1994-10-05-00-00',
    until: '2022-11-26-07-27',
    content: '',
  },
  {
    title: '사용자는 자신의 비디오(카메라)를 다른 사람과 실시간으로 공유 할 수 있다.',
    importance: 1,
    from: '1994-10-05-00-00',
    until: '2022-11-27-00-38',
    content: '',
  },
  {
    title: '티켓팅이 끝나면 결과 페이지로 이동 후 결과를 확인할 수 있다.',
    importance: 1,
    from: '1994-10-05-00-00',
    until: '2022-11-27-03-20',
    content: '',
  },
];

const formatStringToDate = (str: string): Date => {
  const arr: Array<number> = str.split('-').map((el) => parseInt(el, 10));
  arr[1] -= 1;
  return new Date(...(arr as [number, number, number, number, number]));
};

const controlInput: Array<TestTodo> = rawData.map((el) =>
  toTestTodo({
    ...el,
    id: uuid(),
    owner: '',
    from: formatStringToDate(el.from),
    until: formatStringToDate(el.until),
    prev: [],
    next: [],
  }),
);

export default controlInput;