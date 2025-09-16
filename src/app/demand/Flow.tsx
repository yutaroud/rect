import Heading2 from './components/Heading2'
import { Box,Typography } from '@mui/material';
import arrow from '../../../public/image/demand/arrow.svg';
import React from 'react';

const flow = [
  {
    id: '1',
    step: 'STEP 1',
    title: 'お問い合わせ',
    detail: 'Webフォームにて相談事項をお送りください。',
  },
  {
    id: '2',
    step: 'STEP 2',
    title: 'ヒアリング',
    detail:
      'ヒアリング内容から、最適な開発プランをご提案します。',
  },
  {
    id: '3',
    step: 'STEP 3',
    title: 'ご契約',
    detail:
      'ご提案内容にご納得いただけたらご契約となります。',
  },
  {
    id: '4',
    step: 'STEP 4',
    title: '開発',
    detail:
      '定期的に進捗報告を行い、お客様と密に連携しながら進めます。',
  },
  {
    id: '5',
    step: 'STEP 5',
    title: '納品・公開',
    detail:
      '開発完了後、最終確認を経て納品となります。',
  },
];

const sxStyles = {
  list: {
    fontSize: '14px',
    letterSpacing: '0.05em',
    lineHeight: '1.7',
    mt: 5,
    display: 'flex',
    gap: '8px',
    justifyContent: 'space-between',
    listStyle: 'none',
    alignItems: 'center',
  },
  listItem: {
    px: '12px',
    pt: 4,
    pb: 5,
    backgroundColor: '#EFF7FF',
    borderRadius: '8px',
    border: 'solid 1px #EFF7FF',
    boxShadow: '0px 1px 5px rgba(34, 106, 170, 0.19)',
    width: '180px',
  },
  icon: {
    background: `url(${arrow.src})`,
    width: '9px',
    height: '14px',
    content: '""',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block'
  },
  listItemWrap: {
    display: 'flex',
    flexDirection: 'column',
  }
}

const Arrow = () => {
  return (
    <Box component="span" sx={sxStyles.icon}></Box>
  );
}

const Flow = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        pt: 7,
        pb: 12,
      }}
    >
      <Box
        sx={{
          maxWidth: '1000px',
          width: '100%',
          mx: 'auto',
        }}
      >
        <Heading2 subText="flow" mainText="ご利用の流れ"/>
        <Box sx={sxStyles.list} component="ol">
          {flow.map((item, index) => (
            <React.Fragment key={item.id}>
              <Box component="li" sx={sxStyles.listItem}>
                <Box sx={sxStyles.listItemWrap}>
                  <Typography sx={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    letterSpacing: '0.05em',
                    lineHeight: '1.7',
                    display: 'flex',
                    flexDirection: 'column',
                    alignContent: 'center',
                    justifyContent: 'flex-start',
                    textAlign: 'center',
                    color: '#00298A'
                  }}>
                    <Typography component="span" sx={{
                      fontSize: '14px',
                      fontWeight: 'bold',
                      color: 'rgba(0, 41, 138, 0.4)'
                    }}>{item.step}</Typography>
                    {item.title}
                  </Typography>
                  <Typography sx={{
                    mt: 2,
                    fontSize: '14px',
                    letterSpacing: '0.05em',
                    lineHeight: '1.7',
                    textAlign: 'center'
                  }}>
                    {item.detail}
                  </Typography>
                </Box>
              </Box>
              {index < flow.length - 1 && (
                <Arrow/>
              )}
            </React.Fragment>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
export default Flow;