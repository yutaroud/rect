import Heading2 from './components/Heading2'
import { Box,Typography } from '@mui/material';
import skill from '../../../public/image/demand/skill.webp';
import React from 'react';

const skillData = [
  {
    id: '1',
    category: '開発言語',
    item: ['Ruby', 'PHP', 'Python'],
  },
  {
    id: '2',
    category: 'フロントエンドフレームワーク',
    item: ['React.js'],
  },
  {
    id: '3',
    category: 'バックエンドフレームワーク',
    item: ['Ruby on Rails', 'Symfony'],
  },
  {
    id: '4',
    category: '開発言語',
    item: ['AWS', 'Google Cloud', 'Terraform', 'Pulumi'],
  },
  {
    id: '5',
    category: 'CMS',
    item: ['Studio', 'WordPress', 'Micro CMS'],
  },
];

const sxStyles = {
  list: {
    mt: 5,
    display: 'flex',
    gap: '24px',
    listStyle: 'none',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    minWidth: '280px',
    maxWidth: '280px',
    background: '#fff',
    borderRadius: '8px',
    px: 2.5,
    py: 2.5,
    boxShadow: '0px 1px 5px rgba(34, 106, 170, 0.2)',
    textAlign: 'center',
  },
  title: {
    fontSize: '16px',
    letterSpacing: '0.08em',
    lineHeight: '1.5',
    fontWeight: 'bold',
  },
  text: {
    fontSize: '12px',
    letterSpacing: '0.05em',
    lineHeight: '1.7',
    color: '#545454',
    mt: 1,
  },
  skillWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    mt: 10,
    justifyContent: 'center',
  },
  skillTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    letterSpacing: '0.05em',
    lineHeight: '1.6',
    color: '#00298A'
  },
}

const Service = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        pt: 7,
        pb: 12,
        backgroundColor: '#EFF7FF'
      }}
    >
      <Box
        sx={{
          maxWidth: '900px',
          width: '100%',
          mx: 'auto',
        }}
      >
        <Heading2 subText="service" mainText="サービス内容"/>
        <Box component="ul" sx={sxStyles.list}>
          <Box component="li" sx={sxStyles.listItem}>
            <Typography component="h3" sx={sxStyles.title}>Webサービス<br/>機能開発</Typography>
            <Typography sx={sxStyles.text}>お客様の課題を解決できる<br/>Webサービスを開発します。</Typography>
          </Box>
          <Box component="li" sx={sxStyles.listItem}>
            <Typography component="h3" sx={sxStyles.title}>既存サイトの<br/>機能追加・改修</Typography>
            <Typography sx={sxStyles.text}>機能改善・パフォーマンス向上など、<br/>部分的な改修にも対応いたします。</Typography>
          </Box>
          <Box component="li" sx={sxStyles.listItem}>
            <Typography component="h3" sx={sxStyles.title}>CMSの<br/>構築・カスタマイズ</Typography>
            <Typography sx={sxStyles.text}>お客様自身で簡単に更新・運用できる<br/>Webサイトを構築します。</Typography>
          </Box>
          <Box component="li" sx={sxStyles.listItem}>
            <Typography component="h3" sx={sxStyles.title}>Webサイト・<br/>ホームページ制作</Typography>
            <Typography sx={sxStyles.text}>ランディングページ・コーポレートサイトなどの制作をいたします。</Typography>
          </Box>
          <Box component="li" sx={sxStyles.listItem}>
            <Typography component="h3" sx={sxStyles.title}>AIを活用した<br/>業務課題の解決</Typography>
            <Typography sx={sxStyles.text}>業務効率化など、生成AIを活用した<br/>課題解決方法をご提案いたします。</Typography>
          </Box>
        </Box>
        <Box sx={sxStyles.skillWrap}>
          <img
            src={skill.src}
            alt=""
            width="484"
            height="280"
            style={{ maxWidth: '242px', height: 'auto', }}
          />
          <Box>
            <Typography sx={sxStyles.skillTitle}>対応技術 一例</Typography>
            <Box component="dl" mt={2}>
              {skillData.map((data) => (
                <Box key={data.id} sx={{
                  display: 'flex',
                  alignItems: 'center',
                  '& + &': {
                    mt: 1,
                  }
                }}>
                  <Typography
                    component="dt"
                    sx={{
                      fontWeight: 'bold',
                      minWidth: '240px',
                      maxWidth: '240px',
                      fontSize: '14px',
                      letterSpacing: '0.05em',
                      lineHeight: '1.7',
                    }}
                  >
                    {data.category}
                  </Typography>
                  <Typography component="dd" sx={{
                      fontSize: '14px',
                      letterSpacing: '0.05em',
                      lineHeight: '1.7',
                  }}>
                    {data.item.map((skill, index) => (
                      <React.Fragment key={index}>
                        {skill}
                        {index < data.item.length - 1 && ' / '}
                      </React.Fragment>
                    ))}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default Service;