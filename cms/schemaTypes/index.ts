//Documents
import {page} from './documents/marketing/page'
import {post} from './documents/marketing/post'
import {presentation} from './documents/marketing/presentation'
import {project} from './documents/marketing/project'
import {service} from './documents/marketing/service'
import {navigation} from './documents/system/navigation'
import {authorType} from './documents/system/author'

//Section
import {section} from './sections/section'

//Blocks
import {contentBlock} from './blocks/content/content'
import {headingBlock} from './blocks/content/heading'
import {mediaBlock} from './blocks/content/media'
import {quoteBlock} from './blocks/content/quote'
import {collectionBlock} from './blocks/collections/collection'
import {galleryBlock} from './blocks/collections/gallery'
import {teamBlock} from './blocks/collections/team'
import {testimonialBlock} from './blocks/collections/testimonial'
import {statsBlock} from './blocks/data/stats'
import {tableBlock} from './blocks/data/table'
import {timelineBlock} from './blocks/data/timeline'
import {accordionBlock} from './blocks/interactive/accordion'
import {formBlock} from './blocks/interactive/form'
import {sliderBlock} from './blocks/interactive/slider'
import {tabBlock} from './blocks/interactive/tab'
import {ctaBlock} from './blocks/marketing/cta'
import {faqBlock} from './blocks/marketing/faq'
import {featureBlock} from './blocks/marketing/feature'
import {pricingBlock} from './blocks/marketing/pricing'

//Objects
import {media} from './objects/content/media'
import {meta} from './objects/content/meta'
import {seo} from './objects/content/seo'
import {formField} from './objects/form/formFields'
import {accordionItem} from './objects/items/accordionItem'
import {faqItem} from './objects/items/faqItem'
import {featureItem} from './objects/items/featureItem'
import {pricingItem} from './objects/items/pricingPlan'
import {slideItem} from './objects/items/slideItem'
import {statItem} from './objects/items/statItem'
import {tabItem} from './objects/items/tabItem'
import {teamMember} from './objects/items/teamMember'
import {testimonialItem} from './objects/items/testimonialItem'
import {timelineItem} from './objects/items/timelineItem'
import {navigationItem} from './objects/navigation/navigationItem'
import {navigationChild} from './objects/navigation/navigationChild'
import {navigationGroup} from './objects/navigation/navigationGroup'
import {socialLink} from './objects/navigation/socialLink'
import {badge} from './objects/ui/badge'
import {button} from './objects/ui/button'
import {link} from './objects/ui/link'

export const schemaTypes = [
  //Documents
  page,
  post,
  presentation,
  project,
  service,

  authorType,
  navigation,

  //Sections
  section,

  //Blocks
  // Content
  contentBlock,
  headingBlock,
  mediaBlock,
  quoteBlock,
  // Collection
  collectionBlock,
  galleryBlock,
  teamBlock,
  testimonialBlock,
  // Data
  statsBlock,
  tableBlock,
  timelineBlock,
  // Interactive
  accordionBlock,
  formBlock,
  sliderBlock,
  tabBlock,
  // Marketing
  ctaBlock,
  faqBlock,
  featureBlock,
  pricingBlock,

  //Objects
  //Content
  media,
  meta,
  seo,
  //Fields
  formField,
  //Items
  accordionItem,
  faqItem,
  featureItem,
  pricingItem,
  slideItem,
  statItem,
  tabItem,
  teamMember,
  testimonialItem,
  timelineItem,
  //Navigation
  navigationItem,
  navigationChild,
  navigationGroup,
  socialLink,
  //UI
  badge,
  button,
  link,
]
