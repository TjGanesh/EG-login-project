import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" target='_blank' href="https://www.easygenerator.com/en/">
        Easy Generator
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}