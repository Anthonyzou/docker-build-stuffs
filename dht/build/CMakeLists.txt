cmake_minimum_required(VERSION 2.8)
project(dht)

set(CMAKE_RUNTIME_OUTPUT_DIRECTORY "${CMAKE_CURRENT_SOURCE_DIR}/release")

find_package(Boost COMPONENTS system)
include_directories( ${MPI_CXX_INCLUDE_PATH} )

message("BOOST " ${Boost_LIBRARIES})

set(CMAKE_CXX_FLAGS_DEBUG "${CMAKE_CXX_FLAGS_DEBUG} -g") # -g is in default config
set(CMAKE_CXX_FLAGS_RELEASE "${CMAKE_CXX_FLAGS_RELEASE} -O3") # -O3 is in default config
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=c++11 -pthread")

set(SOURCE_FILES main.cpp lazy_bdecode.cpp)
add_executable(dht ${SOURCE_FILES})
target_link_libraries(dht ${Boost_LIBRARIES})
