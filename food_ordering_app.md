
# Food Ordering App

<!-- wireframing is done -->

## Low Level Design of the App

### Main Components
- **App component**: contains 3 main components
  - Header
  - Body
  - Footer

### Component Breakdown

#### Header
- App logo
- Navigation items
- Cart icon

#### Body
- Search Bar
- Restaurant Container
  - Restaurant cards
   - Image 
   - Name of Restaurant, Star Rating, Cuisine, delivery time

#### Footer
- Copyright disclaimer
- Links
- Address
- Contact information

### Component Structure
```jsx
<App>
  <Header />
  <Body />
  <Footer />
</App>
```

## Implementation Details

### Data Structure
The application uses a mock data array `resList` containing restaurant information with the following structure:
- `type`: Restaurant type identifier
- `info`: Restaurant details including:
  - `resId`: Unique restaurant identifier
  - `name`: Restaurant name
  - `image`: Restaurant image URLs
  - `rating`: Rating information with aggregate scores
  - `cuisine`: Array of cuisine types
  - `locality`: Location details
  - `costText`: Pricing information
- `order`: Delivery information including time and availability

### Component Implementation

#### Header Component
```jsx
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="..." alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>About</li>
          <li>Home</li>
          <li>Contact</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
}
```

#### RestaurantCard Component
- Receives restaurant data via props
- Displays restaurant image, name, cuisine types, rating, and delivery time
- Uses dynamic data binding to render restaurant information
- Implements proper key prop for list rendering

#### Body Component
- Contains search functionality placeholder
- Maps through restaurant data to render multiple RestaurantCard components
- Uses unique `resId` as key for optimal React rendering

#### AppLayout Component
- Root component that orchestrates the entire application
- Renders Header and Body components in proper hierarchy

### Key Features Implemented
1. **Component-based Architecture**: Modular design with reusable components
2. **Props System**: Data passing between parent and child components
3. **Dynamic Rendering**: Restaurant list rendered from data array using map function
4. **Responsive Design**: CSS classes for styling and layout
5. **React Keys**: Proper key implementation for list items

### Data Flow
1. Restaurant data stored in `resList` array
2. Data passed to Body component
3. Body component maps through data and creates RestaurantCard instances
4. Each RestaurantCard receives individual restaurant data via props
5. Components render UI based on received data

### Styling Approach
- CSS classes used for component styling
- Inline styles applied where necessary (backgroundColor in RestaurantCard)
- Responsive layout with flexbox/grid (implied by class names)

### Current State
- Static data implementation
- Basic component structure established
- Ready for enhancement with state management, API integration, and advanced features
   - Name of Restaurant, Star Rating, Cuisine, delivery time

#### Footer
- Copyright disclaimer
- Links
- Address
- Contact information

### Component Structure
```jsx
<App>
  <Header />
  <Body />
  <Footer />
</App>
