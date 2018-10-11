package com.etc.huangchong.dao.impl;

import java.util.List;

import com.etc.huangchong.dao.AdminDao;
import com.etc.huangchong.entity.Admin;
import com.etc.huangchong.util.BaseDao;

public class AdminDaoImpl implements AdminDao {

@Override
public List<Admin> queyrAdmin() {
	// TODO Auto-generated method stub
	String sql = "select * from Admin";
	List<Admin> list =(List<Admin>) BaseDao.select(sql, Admin.class);
	return list;
}
}
