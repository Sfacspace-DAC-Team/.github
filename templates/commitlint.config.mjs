// 한국어 제목용 커밋 규칙이다(CONTRIBUTING.md 1절).
// subject-case는 끈다. 켜 두면 "API 추가"처럼 영어 대문자로 시작하는 제목까지 막힌다.
const VAGUE = ['수정', '버그 수정', '오류 수정', '업데이트', '기타 수정', '리뷰 반영', '정리', 'WIP', 'wip'];

export default {
  extends: ['@commitlint/config-conventional'],
  plugins: [
    {
      rules: {
        'subject-korean': ({ subject }) => [
          /[가-힣]/.test(subject ?? ''),
          '제목 설명은 한국어로 써 주세요',
        ],
        'subject-not-vague': ({ subject }) => [
          !VAGUE.includes((subject ?? '').trim()),
          '무엇을 어떻게 바꿨는지 제목에 써 주세요 (예: 프레임 이동이 한 칸 밀리는 문제 수정)',
        ],
      },
    },
  ],
  rules: {
    'subject-case': [0],
    'header-max-length': [2, 'always', 72],
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [2, 'always'],
    'subject-korean': [2, 'always'],
    'subject-not-vague': [2, 'always'],
  },
};
