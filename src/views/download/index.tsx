import { memo } from 'react'

interface DownloadProps {
  children?: React.ReactNode
}

const Download: React.FC<DownloadProps> = memo(() => {
  return <div>Download</div>
})

Download.displayName = 'Download'

export default Download
