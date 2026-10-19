import { AwardIcon, ChecklistIcon, DeliveryIcon, MoneyIcon, Reveal, UserSearchIcon, WorkerIcon } from '@/shared/ui'

const ITEMS = [
  {
    Icon: ChecklistIcon,
    title: 'Тротуарная плитка от производителя в широком ассортименте',
    text: 'На сайте вы сможете подобрать прессованную, вибролитую или фасадную плитку, блоки и бордюры, водостоки, крышки на столбы и многое другое.',
  },
  {
    Icon: UserSearchIcon,
    title: 'Высокий уровень сервиса обслуживания',
    text: 'Наши менеджеры всегда вежливые и профессиональные в работе с клиентами, они готовы помочь с выбором нужной модели и ответить на все вопросы клиента.',
  },
  {
    Icon: WorkerIcon,
    title: 'Услуги команды опытных специалистов по монтажу',
    text: 'Наша компания предлагает услуги профессиональной укладки и другие работы по благоустройству частных территорий.',
  },
  {
    Icon: DeliveryIcon,
    title: 'Быстрая и удобная доставка',
    text: 'Развоз заказов осуществляется при помощи спецтехники – манипулятора, облегчающего процесс погрузки и разгрузки по Волоколамскому, Лотошинскому, Шаховскому району, Истре, Клину, Рузе.',
  },
  {
    Icon: MoneyIcon,
    title: 'Демократичная стоимость',
    text: 'Если вы хотите подобрать и купить тротуарную плитку по наиболее выгодной цене в регионе – вам однозначно в «Мастер Строй»! У нас всегда первая цена напрямую от производителя!',
  },
  {
    Icon: AwardIcon,
    title: 'Безупречный контроль качества продукции',
    text: 'Все материалы соответствуют техническим нормам ГОСТа, а тщательный контроль позволяет исключить риск попадания брака в партию.',
  },
]

export function Advantages() {
  return (
    <section id="advantages" className="bg-graphite py-16 md:py-24 lg:py-[120px]">
      <div className="container-site">
        <Reveal as="h2" className="section-title text-white">Наши преимущества</Reveal>

        <ul className="mt-10 grid gap-6 md:mt-14 md:grid-cols-2 lg:mt-[82px] lg:grid-cols-3 lg:gap-x-[30px] lg:gap-y-[50px]">
          {ITEMS.map(({ Icon, title, text }, i) => (
            <Reveal
              as="li"
              key={title}
              delay={(i % 3) * 90}
              className="group rounded-[30px] bg-white px-7 pt-5 pb-9 shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgb(0_0_0/0.35)]"
            >
              <Icon className="mx-auto h-[92px] w-[100px] text-accent transition-transform duration-300 group-hover:scale-110" />
              <h3 className="mt-6 text-sm leading-snug font-bold">{title}</h3>
              <p className="mt-4 text-sm leading-snug text-ink/90">{text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
