import Heading2 from './components/Heading2'
import { Box,Typography } from '@mui/material';
import { sxStyles as commonSxStyles } from './components/Style';

const sxStyles = {
  headingText: {
    fontSize: '14px',
    letterSpacing: '0.05em',
    lineHeight: '1.7',
    mt: 2,
    width: '100%',
    '@media screen and (max-width:450px)': {
      textAlign: 'center',
    },
    '& > br': {
      '&:first-child': {
        '@media screen and (max-width:450px)': {
          display: 'none',
        }
      }
    }
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
    letterSpacing: '0.05em',
    lineHeight: '1.6',
  },
  text: {
    fontSize: '14px',
    letterSpacing: '0.05em',
    lineHeight: '1.7',
  },
  list: {
    listStyle: 'none',
    width: 'calc(100% - 22% - 48px)',
    '@media screen and (max-width:835px)': {
      width: '100%'
    }
  },
  listItem: {
    background: commonSxStyles.color.white,
    borderRadius: '8px',
    width: '100%',
    px: 3,
    py: 4,
    boxShadow: '0px 1px 5px rgba(34, 106, 170, 0.2)',
    '& + &': {
      mt: 3,
    }
  },
  listItemText: {
    mt: 2,
    listStylePosition: 'inside',
    listStyleType: 'disc',
  },
  tech: {
    mt: 1,
  },
  techWrap: {
    display: 'flex',
    gap: 2,
    '& > dt' : {
      color: commonSxStyles.color.grayText,
      fontSize: '12px',
      letterSpacing: '0.05em',
      lineHeight: '1.7',
      minWidth: '66px',
      maxWidth: '66px',
    },
    '& > dd' : {
      color: commonSxStyles.color.grayText,
      fontSize: '12px',
      letterSpacing: '0.05em',
      lineHeight: '1.7',
    },
    '& + &': {
      mt:0.5,
    }
  },
}

const Case = () => {
  return (
    <Box
      sx={{
        pt: 7,
        pb: 12,
        '@media screen and (max-width:450px)': {
          pb: 9,
        }
      }}
    >
      <Box
        sx={{
          maxWidth: '940px',
          width: '100%',
          mx: 'auto',
          display: 'flex',
          alignItems: 'flex-start',
          gap : 6,
          flexWrap: 'wrap',
          px: 2.5,
          '@media screen and (max-width:450px)': {
            flexDirection: 'column',
            alignItems: 'center',
            px: 2.5,
            gap: 3,
          }
        }}
      >
        <Box sx={{minWidth: '22%'}}>
          <Heading2 subText="case" mainText="開発事例" position='right'/>
          <Typography component="p" sx={sxStyles.headingText}>弊社エンジニアが<br/>実際に対応した業務の<br/>一部をご紹介いたします。</Typography>
        </Box>
        <Box component="ul" sx={sxStyles.list}>
          <Box component="li" sx={sxStyles.listItem}>
            <Typography component="h3" sx={sxStyles.title}>コーポレートサイトの開発</Typography>
            <Box component="ul" sx={sxStyles.listItemText}>
              <Typography component="li" sx={sxStyles.text}>UI・UXから一貫したシステム開発</Typography>
              <Typography component="li" sx={sxStyles.text}>要件に合わせた独自プラグインの開発</Typography>
              <Typography component="li" sx={sxStyles.text}>担当者が簡単に更新できるカスタマイズCMSの実装</Typography>
            </Box>
            <Box component="dl" sx={sxStyles.tech}>
              <Box sx={sxStyles.techWrap}>
                <Typography component="dt">技術・言語</Typography>
                <Typography component="dd">WordPress</Typography>
              </Box>
              <Box sx={sxStyles.techWrap}>
                <Typography component="dt">開発期間</Typography>
                <Typography component="dd">1ヶ月</Typography>
              </Box>
            </Box>
          </Box>
          <Box component="li" sx={sxStyles.listItem}>
            <Typography component="h3" sx={sxStyles.title}>レガシーシステムのモダン化</Typography>
            <Box component="ul" sx={sxStyles.listItemText}>
              <Typography component="li" sx={sxStyles.text}>Rails4からRails6(当時の最新版)へのバージョンアップ対応</Typography>
              <Typography component="li" sx={sxStyles.text}>RSpecを用いたテストの整備</Typography>
              <Typography component="li" sx={sxStyles.text}>RuboCopの導入/CIでの自動判定</Typography>
              <Typography component="li" sx={sxStyles.text}>開発環境の構築時間を短縮するためのコンテナ化・EC2からFargateへの移管</Typography>
              <Typography component="li" sx={sxStyles.text}>Terraformでの本番環境のコード化</Typography>
            </Box>
            <Box component="dl" sx={sxStyles.tech}>
              <Box sx={sxStyles.techWrap}>
                <Typography component="dt">技術・言語</Typography>
                <Typography component="dd">Ruby, Ruby on Rails, AWS Fargate, Terraform</Typography>
              </Box>
              <Box sx={sxStyles.techWrap}>
                <Typography component="dt">開発期間</Typography>
                <Typography component="dd">2ヶ月</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default Case;