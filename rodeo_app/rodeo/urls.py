from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    SeriesViewSet, RodeoViewSet, ContestantViewSet,
    ContestRodeoSeriesViewSet, EventViewSet, ContestEventViewSet,
    EventPartnerViewSet, MensBreakawayViewSet, home  # Import the home view
)

router = DefaultRouter()
router.register(r'series', SeriesViewSet)
router.register(r'rodeo', RodeoViewSet)
router.register(r'contestants', ContestantViewSet)
router.register(r'contest-rodeo-series', ContestRodeoSeriesViewSet)
router.register(r'events', EventViewSet)
router.register(r'contest-events', ContestEventViewSet)
router.register(r'event-partners', EventPartnerViewSet)
router.register(r'mens-breakaway', MensBreakawayViewSet)

urlpatterns = [
    path('', home, name='home'),  # Add this line to handle the root URL
    path('api/', include(router.urls)),
]
