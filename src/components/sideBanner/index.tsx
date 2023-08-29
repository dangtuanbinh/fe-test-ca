import { Carousel } from "antd"
import "./styles.scss"

interface ISideBannerProps{
  data?: any
}

const classNamePrefix = "side-banner"

const SideBanner: React.FC<ISideBannerProps> = (props) => {
  const {data} = props

  return (
    <div className={classNamePrefix}>
       <Carousel dots={false} autoplay>
          {data && data.length > 0 ?
            data.map((d:any) => (
              <img className={`${classNamePrefix}__image`} src={d.imgUrl} alt="" key={d.id} />
            ))
          : ""}
       </Carousel>
    </div>
  )
}

export default SideBanner