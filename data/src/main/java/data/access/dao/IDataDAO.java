package data.access.dao;

import data.model.dto.AbbatoireDTO;

public interface IDataDAO {
	
	AbbatoireDTO getAbbatoireBySiret (Long siret);
	

}
