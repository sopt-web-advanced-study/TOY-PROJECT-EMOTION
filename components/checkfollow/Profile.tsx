'use client';
import styled from '@emotion/styled';
import Image from 'next/image';

export default function Profile() {
  return (
    <ProfileWrapper>
      <ImageWrapper>
        <ProfileImage>
          <Image
            src="/santaHatImg.png"
            alt="산타모자"
            width={40}
            height={40}
            style={{ position: 'absolute', top: -20, left: -5, rotate: '340deg' }}
          />
        </ProfileImage>
      </ImageWrapper>
      <TextWrapper>
        <Name>Name</Name>
        <Bio>Bio</Bio>
        <ButtonWrapper>
          {/* 임시 버튼 스타일 */}
          <Button>팔로워</Button>
          <Button>팔로잉</Button>
        </ButtonWrapper>
      </TextWrapper>
    </ProfileWrapper>
  );
}

const ProfileWrapper = styled.section`
  display: flex;
  gap: 2rem;

  width: 100%;
  height: 15rem;
  padding: 3rem 2.5rem;

  background-color: ${({ theme }) => theme.color.main01};
  border: 3px solid ${({ theme }) => theme.color.black};
  border-radius: 1rem;
`;

const ImageWrapper = styled.div`
  width: 40%;
`;

/** API로 imageUrl 받아온 뒤, Image 태그로 변경 필요 */
const ProfileImage = styled.div`
  position: absolute;

  width: 9rem;
  height: 9rem;

  background-color: ${({ theme }) => theme.color.grey01};
  border-radius: 50%;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  justify-content: space-evenly;

  width: 60%;
`;

const Name = styled.span`
  ${({ theme }) => theme.font.title01};
`;

const Bio = styled.span`
  ${({ theme }) => theme.font.subTitle01};
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 2.2rem;
`;

/**버튼 컴포넌트 import 후 삭제 예정 */
const Button = styled.button`
  width: 5.8rem;
  height: 2.5rem;

  ${({ theme }) => theme.font.subTitle02};

  background-color: var(--red, #e66375);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border: 1px solid var(--black, #000);
  border-radius: 5rem;
`;
